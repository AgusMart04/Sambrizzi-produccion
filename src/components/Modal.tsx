import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "md" | "lg" | "xl";
};

const sizeMap = {
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
};

export function Modal({ open, onClose, children, size = "lg" }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full ${sizeMap[size]} max-h-[90vh] overflow-y-auto bg-background border border-gold/30 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]`}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="sticky top-4 float-right mr-4 z-10 h-11 w-11 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-colors flex items-center justify-center bg-ink/80 backdrop-blur"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
