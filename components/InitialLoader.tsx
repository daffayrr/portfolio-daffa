'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function InitialLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after a short delay
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          >
            <motion.div
              animate={{ 
                scale: [0.9, 1.1, 1],
                opacity: [0.5, 1, 1]
              }}
              transition={{ 
                duration: 1.2, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
              className="bg-accent text-black font-bold tracking-widest uppercase text-2xl px-6 py-3 rounded-sm shadow-[0_0_40px_rgba(0,242,195,0.6)]"
            >
              FDY.
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, ease: "circOut" }}
              className="h-1 bg-accent/50 mt-8 rounded-full overflow-hidden relative"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-1/2 h-full bg-accent absolute top-0 left-0 rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
