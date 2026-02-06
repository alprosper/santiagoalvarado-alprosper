import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { X, Settings, Shield, BarChart3, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CookiePreferences {
  essential: boolean; // Always true, cannot be disabled
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface ConsentData {
  accepted: boolean;
  preferences: CookiePreferences;
  timestamp: string;
  version: string;
  userAgent: string;
}

const CONSENT_VERSION = "1.0.0";

// Global function to open cookie preferences
let openCookiePreferencesHandler: (() => void) | null = null;

export const openCookiePreferences = () => {
  if (openCookiePreferencesHandler) {
    openCookiePreferencesHandler();
  }
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  const openPreferences = useCallback(() => {
    // Load existing preferences if available
    const stored = localStorage.getItem("cookie-consent");
    if (stored) {
      try {
        const parsed: ConsentData = JSON.parse(stored);
        setPreferences(parsed.preferences);
      } catch {
        // Keep defaults
      }
    }
    setShowDetails(true);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    openCookiePreferencesHandler = openPreferences;
    return () => {
      openCookiePreferencesHandler = null;
    };
  }, [openPreferences]);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookie-consent");
    if (!storedConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
    
    // Check if consent version is outdated
    try {
      const parsed: ConsentData = JSON.parse(storedConsent);
      if (parsed.version !== CONSENT_VERSION) {
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    const consentData: ConsentData = {
      accepted: true,
      preferences: prefs,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
      userAgent: navigator.userAgent,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    
    // Apply cookie preferences
    applyCookiePreferences(prefs);
    setIsVisible(false);
  };

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // This function would integrate with your analytics/marketing tools
    // For GDPR compliance, only load scripts if consent is given
    if (prefs.analytics) {
      // Enable analytics cookies (e.g., Google Analytics)
      console.log("Analytics cookies enabled");
    }
    if (prefs.marketing) {
      // Enable marketing cookies (e.g., Facebook Pixel)
      console.log("Marketing cookies enabled");
    }
    if (prefs.functional) {
      // Enable functional cookies
      console.log("Functional cookies enabled");
    }
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const acceptSelected = () => {
    saveConsent(preferences);
  };

  const rejectAll = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(essentialOnly);
    saveConsent(essentialOnly);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-up md:left-0 md:right-0 md:flex md:justify-center md:px-6">
      <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl p-3 md:p-4 shadow-2xl max-w-4xl">
        <div className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">
              We use cookies to enhance your experience.{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy
              </Link>{" "}
              •{" "}
              <Link to="/gdpr" className="text-primary hover:underline">
                GDPR
              </Link>{" "}
              •{" "}
              <Link to="/terms-of-service" className="text-primary hover:underline">
                Terms
              </Link>
            </p>

            {showDetails && (
              <div className="space-y-4 mb-4 p-4 bg-muted/50 rounded-lg border border-border/30">
                {/* Essential Cookies - Always enabled */}
                <div className="flex items-start gap-3">
                  <Checkbox id="essential" checked disabled className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="essential" className="flex items-center gap-2 font-medium cursor-not-allowed">
                      <Shield className="h-4 w-4 text-green-500" />
                      Essential Cookies
                      <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded">Required</span>
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1">
                      Necessary for the website to function properly. These cannot be disabled. 
                      Includes security, session management, and basic functionality.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="analytics" 
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, analytics: checked === true }))
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="analytics" className="flex items-center gap-2 font-medium cursor-pointer">
                      <BarChart3 className="h-4 w-4 text-blue-500" />
                      Analytics Cookies
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1">
                      Help us understand how visitors interact with our website by collecting and reporting 
                      information anonymously. Used for improving user experience.
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="marketing" 
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, marketing: checked === true }))
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="marketing" className="flex items-center gap-2 font-medium cursor-pointer">
                      <Target className="h-4 w-4 text-purple-500" />
                      Marketing Cookies
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1">
                      Used to track visitors across websites to display relevant advertisements. 
                      These are set by third-party advertising partners.
                    </p>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="functional" 
                    checked={preferences.functional}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, functional: checked === true }))
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="functional" className="flex items-center gap-2 font-medium cursor-pointer">
                      <Settings className="h-4 w-4 text-orange-500" />
                      Functional Cookies
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1">
                      Enable personalized features and remember your preferences such as language, 
                      region, and customized settings.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {showDetails && (
              <div className="flex flex-wrap gap-2 mt-3">
                <Button onClick={acceptSelected} size="sm">
                  Save Preferences
                </Button>
              </div>
            )}
          </div>
          
          {!showDetails && (
            <div className="flex items-center gap-2 shrink-0">
              <button 
                onClick={() => setShowDetails(true)} 
                className="text-xs text-primary hover:underline flex items-center gap-1"
              >
                <Settings className="h-3 w-3" />
                Customize
              </button>
              <Button onClick={acceptAll} size="sm" className="h-7 text-xs px-3">
                Accept
              </Button>
              <Button onClick={rejectAll} variant="outline" size="sm" className="h-7 text-xs px-3">
                Reject
              </Button>
            </div>
          )}
          
          {showDetails && (
            <button
              onClick={rejectAll}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              aria-label="Close and reject non-essential cookies"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Export helper to check consent status
export const getCookieConsent = (): ConsentData | null => {
  const stored = localStorage.getItem("cookie-consent");
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

// Export helper to check if specific cookie type is allowed
export const isCookieAllowed = (type: keyof CookiePreferences): boolean => {
  const consent = getCookieConsent();
  if (!consent) return false;
  return consent.preferences[type] ?? false;
};

export default CookieConsent;
