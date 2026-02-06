import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BookingDialogProps {
  children: React.ReactNode;
}

export const BookingDialog = ({ children }: BookingDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-auto max-w-none h-auto max-h-none p-0 gap-0 border-none bg-transparent shadow-none rounded-none [&>button]:hidden">
        <iframe
          src="https://link.alprosperai.com/widget/booking/mD2Uhm3c0qYS35kpBvKw"
          style={{ width: "90vw", maxWidth: "500px", height: "80vh", maxHeight: "700px", border: "none" }}
          id="mD2Uhm3c0qYS35kpBvKw_booking"
          title="Book a Strategy Call"
        />
      </DialogContent>
    </Dialog>
  );
};
