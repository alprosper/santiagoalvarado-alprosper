import { useState, useEffect } from "react";
import { m, AnimatePresence } from "@/components/LazyMotionProvider";
import { format, addDays, startOfDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CalendarDays, Clock, User, Mail, Phone, ArrowLeft, ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Lazy-load Supabase client - only needed after user interaction
const getSupabase = () => import("@/integrations/supabase/client").then(m => m.supabase);

interface TimeSlot {
  time: string;
  display: string;
}

interface BookingCalendarProps {
  className?: string;
}

export const BookingCalendar = ({ className }: BookingCalendarProps) => {
  const [step, setStep] = useState<'date' | 'time' | 'details' | 'success'>('date');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<Record<string, string[]>>({});
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [timeSlotPage, setTimeSlotPage] = useState(0);
  const [isBooking, setIsBooking] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [showNewsletterDialog, setShowNewsletterDialog] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const rangeStart = startOfDay(new Date());
  const rangeEnd = addDays(rangeStart, 13);
  const [currentMonth] = useState<Date>(rangeStart);

  // Fetch available slots for the next 14 days (GHL-friendly range)
  useEffect(() => {
    fetchAvailableSlots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAvailableSlots = async () => {
    setIsLoadingSlots(true);
    try {
      const startDate = rangeStart;
      const endDate = rangeEnd;

      const supabase = await getSupabase();
      const { data, error } = await supabase.functions.invoke('ghl-calendar', {
        body: {
          action: 'get-slots',
          startDate: startDate.getTime(),
          endDate: endDate.getTime(),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      });

      if (error) throw error;

      if (data) {
        // Normalize GHL response shape: { "YYYY-MM-DD": { slots: string[] } }
        const normalized: Record<string, string[]> = {};
        for (const [dateKey, value] of Object.entries(data as Record<string, any>)) {
          if (value && Array.isArray(value.slots)) normalized[dateKey] = value.slots;
          else if (Array.isArray(value)) normalized[dateKey] = value;
        }
        setAvailableSlots(normalized);
      } else {
        setAvailableSlots({});
      }
    } catch (error) {
      console.error('Error fetching slots:', error);
      toast({
        title: "Error",
        description: "Failed to load available time slots. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingSlots(false);
    }
  };

  const getTimeSlotsForDate = (date: Date): TimeSlot[] => {
    const dateKey = format(date, 'yyyy-MM-dd');
    const slots = availableSlots[dateKey] || [];
    
    // Filter to hourly slots only (minutes === 0)
    const hourlySlots = slots.filter((slot: string) => {
      const slotDate = new Date(slot);
      return slotDate.getMinutes() === 0;
    });
    
    return hourlySlots.map((slot: string) => {
      // GHL returns ISO timestamps like "2025-12-24T08:00:00-07:00"
      const slotDate = new Date(slot);
      const hours = slotDate.getHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
      
      return {
        time: slot, // Keep the full ISO string for booking
        display: `${displayHour}:00 ${ampm}`,
      };
    });
  };

  const isDateAvailable = (date: Date): boolean => {
    const dateKey = format(date, 'yyyy-MM-dd');
    const slots = availableSlots[dateKey];
    return slots && slots.length > 0;
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setTimeSlotPage(0); // Reset pagination when date changes
    if (date) {
      setStep('time');
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('details');
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      toast({
        title: "Missing name",
        description: "Please enter your first and last name to book.",
        variant: "destructive",
      });
      return;
    }

    if (!consentChecked) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive communications from Alprosper.",
        variant: "destructive",
      });
      return;
    }

    setIsBooking(true);
    try {
      // selectedTime is already a full ISO timestamp from GHL (e.g., "2025-12-25T11:00:00-07:00")
      const supabase = await getSupabase();
      const { data, error } = await supabase.functions.invoke('ghl-calendar', {
        body: {
          action: 'book-appointment',
          selectedSlot: selectedTime,
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      });

      if (error) throw error;

      setStep('success');
      toast({
        title: "Booking Confirmed!",
        description: "We'll send you a confirmation email shortly.",
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error booking your appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsBooking(false);
    }
  };

  const resetBooking = () => {
    setStep('date');
    setSelectedDate(undefined);
    setSelectedTime(null);
    setFormData({ firstName: '', lastName: '', email: '', phone: '' });
    setConsentChecked(false);
  };

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);
    try {
      const supabase = await getSupabase();
      const { error } = await supabase.functions.invoke('add-ghl-contact', {
        body: { email: newsletterEmail },
      });

      if (error) throw error;

      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      setShowNewsletterDialog(false);
      setNewsletterEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const allTimeSlots = selectedDate ? getTimeSlotsForDate(selectedDate) : [];
  const slotsPerPage = 6;
  const totalPages = Math.ceil(allTimeSlots.length / slotsPerPage);
  const visibleTimeSlots = allTimeSlots.slice(timeSlotPage * slotsPerPage, (timeSlotPage + 1) * slotsPerPage);

  return (
    <Card className={cn("glass-card p-6 md:p-8 max-w-2xl mx-auto", className)}>
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {['date', 'time', 'details', 'success'].map((s, i) => (
          <div
            key={s}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              s === step ? "w-8 bg-primary" : 
              ['date', 'time', 'details', 'success'].indexOf(step) > i ? "w-4 bg-primary/60" : "w-4 bg-muted"
            )}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 'date' && (
          <m.div
            key="date"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <CalendarDays className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-2">Select a Date</h3>
              <p className="text-muted-foreground text-sm">Choose your preferred date for the strategy call</p>
            </div>

            {isLoadingSlots ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  month={currentMonth}
                  disabled={(date) => date < rangeStart || date > rangeEnd || !isDateAvailable(date)}
                  className="rounded-xl border border-border/50 p-4 pointer-events-auto"
                  classNames={{
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary/90",
                    day_today: "bg-accent/50 text-accent-foreground",
                  }}
                />
              </div>
            )}
          </m.div>
        )}

        {step === 'time' && (
          <m.div
            key="time"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-2">Select a Time</h3>
              <p className="text-muted-foreground text-sm">
                {selectedDate && format(selectedDate, 'EEEE, MMMM d, yyyy')}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {visibleTimeSlots.length > 0 ? (
                visibleTimeSlots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={selectedTime === slot.time ? "default" : "outline"}
                    className={cn(
                      "h-12 transition-all",
                      selectedTime === slot.time && "ring-2 ring-primary/50"
                    )}
                    onClick={() => handleTimeSelect(slot.time)}
                  >
                    {slot.display}
                  </Button>
                ))
              ) : (
                <p className="col-span-full text-center text-muted-foreground py-8">
                  No available times for this date. Please select another date.
                </p>
              )}
            </div>

            {/* Pagination for time slots */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTimeSlotPage(p => Math.max(0, p - 1))}
                  disabled={timeSlotPage === 0}
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  {timeSlotPage + 1} of {totalPages}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTimeSlotPage(p => Math.min(totalPages - 1, p + 1))}
                  disabled={timeSlotPage >= totalPages - 1}
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )}

            <Button
              variant="ghost"
              onClick={() => setStep('date')}
              className="w-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Calendar
            </Button>
          </m.div>
        )}

        {step === 'details' && (
          <m.div
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-2">Your Details</h3>
              <p className="text-muted-foreground text-sm">
                {selectedDate && format(selectedDate, 'EEEE, MMMM d')} at {allTimeSlots.find(s => s.time === selectedTime)?.display}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="pl-10"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="pl-10"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={consentChecked}
                  onCheckedChange={(checked) => setConsentChecked(checked === true)}
                  className="mt-1"
                />
                <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  By checking this box, I consent to receive SMS or Emails from Alprosper regarding confirmations or service-related communications. Message & data rates may apply. I can reply STOP to opt out or unsubscribe at any time.
                </Label>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="ghost"
                onClick={() => setStep('time')}
                className="flex-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={handleBooking}
                disabled={isBooking || !formData.email || !formData.firstName.trim() || !formData.lastName.trim() || !consentChecked}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                {isBooking ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <ArrowRight className="w-4 h-4 mr-2" />
                )}
                Confirm Booking
              </Button>
            </div>
          </m.div>
        )}

        {step === 'success' && (
          <m.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="text-center py-8"
          >
            <m.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6"
            >
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </m.div>
            
            <h3 className="font-display text-2xl md:text-3xl mb-3">You're All Set!</h3>
            <p className="text-muted-foreground mb-2">
              Your strategy call has been booked for
            </p>
            <p className="text-lg font-medium text-foreground mb-6">
              {selectedDate && format(selectedDate, 'EEEE, MMMM d, yyyy')} at {allTimeSlots.find(s => s.time === selectedTime)?.display}
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              A confirmation email has been sent to {formData.email}
            </p>

            <Button onClick={() => setShowNewsletterDialog(true)} variant="outline" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Subscribe to our Free Newsletter
            </Button>
          </m.div>
        )}
      </AnimatePresence>

      {/* Newsletter Dialog */}
      <Dialog open={showNewsletterDialog} onOpenChange={setShowNewsletterDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Subscribe to Our Newsletter</DialogTitle>
            <DialogDescription>
              Get the latest tips, strategies, and insights delivered straight to your inbox.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleNewsletterSubscribe} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="newsletter-email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="your@email.com"
                  className="pl-10"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isSubscribing}>
              {isSubscribing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Card>
  );
};