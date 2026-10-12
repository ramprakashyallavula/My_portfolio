"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Content stays readable before hydration; motion runs once as it enters view. */
export default function Reveal({ children, className, delay = 0 }: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            className={`reveal ${className ?? ""}`}
            initial={false}
            whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: [0.65, 1], y: [20, 0] }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
