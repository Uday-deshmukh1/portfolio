import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Share2, Download, Link, Copy, Send, ExternalLink } from "lucide-react";
import { profile } from "./data";

const fadeOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideDrawer = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring", damping: 28, stiffness: 300, mass: 0.8 } },
  exit: { x: "100%", transition: { type: "spring", damping: 30, stiffness: 350, mass: 0.8 } },
};

const emailAddress = profile.email;

export default function QRDrawer({ isOpen, onClose, platform, imgSrc, link, type }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(link)}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: platform, url: link });
      } catch {
        console.warn("Share failed");
      }
    }
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = qrUrl;
    a.download = `${platform}-qr.png`;
    a.click();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
  };

  const handleOpen = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleCopyMail = () => {
    navigator.clipboard.writeText(emailAddress);
  };

  const handleSendMail = () => {
    const subject = encodeURIComponent("Let's Connect - [Your Name]");
    const body = encodeURIComponent(
      "Hi Uday,\n\nI came across your portfolio and would love to connect with you.\n\nBest,\n[Your Name]"
    );
    const a = document.createElement("a");
    a.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    a.click();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex justify-end"
          variants={fadeOverlay}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            variants={slideDrawer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 flex h-full w-full flex-col items-center justify-center border-l border-white/[0.08] bg-[rgba(9,14,20,0.85)] px-8 backdrop-blur-2xl sm:w-[380px]"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-all hover:border-white/[0.15] hover:text-white"
            >
              <X size={20} />
            </button>

            {type === "email" ? (
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/20 to-violet-400/20 shadow-lg shadow-purple-500/10">
                  <img src={imgSrc} alt={platform} className="h-8 w-8" />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">{platform}</h3>

                <div className="mt-8 w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-2xl shadow-purple-500/10">
                  <p className="text-sm font-medium text-slate-400">Email address</p>
                  <p className="mt-2 text-lg font-bold text-white">{emailAddress}</p>
                </div>

                <p className="mt-5 text-sm font-medium text-slate-400">
                  Choose an option below
                </p>

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={handleCopyMail}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400 active:scale-95"
                  >
                    <Copy size={16} />
                    Copy Mail
                  </button>
                  <button
                    onClick={handleSendMail}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400 active:scale-95"
                  >
                    <Send size={16} />
                    Send Mail
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/20 to-violet-400/20 shadow-lg shadow-purple-500/10">
                  <img src={imgSrc} alt={platform} className="h-8 w-8" />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">{platform}</h3>

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 shadow-2xl shadow-purple-500/10">
                  <img
                    src={qrUrl}
                    alt={`QR Code for ${platform}`}
                    className="h-[220px] w-[220px]"
                  />
                </div>

                <p className="mt-5 text-sm font-medium text-slate-400">
                  Scan to connect instantly
                </p>

                <button
                  onClick={handleOpen}
                  className="btn-liquid mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold active:scale-95"
                >
                  <ExternalLink size={16} />
                  Open <span className="text-purple-200">{platform}</span>
                </button>

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400 active:scale-95"
                  >
                    <Share2 size={16} />
                    Share
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400 active:scale-95"
                  >
                    <Download size={16} />
                    Download QR
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400 active:scale-95"
                  >
                    <Link size={16} />
                    Copy Link
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
