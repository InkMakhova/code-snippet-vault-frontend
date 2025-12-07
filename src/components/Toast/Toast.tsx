import { createContext, useContext, useState, type ReactNode, useCallback } from "react";
import styles from "./Toast.module.css";

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    // auto hide after 1s
    setTimeout(() => setMessage(null), 1000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast region at top of app */}
      <div className={styles.toastRegion} aria-live="polite">
        {message && (
          <div className={styles.toast} role="status">
            {message}
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside <ToastProvider>");
  return context;
}
