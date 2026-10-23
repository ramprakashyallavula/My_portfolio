"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Content stays readable before hydration; motion runs once as it enters view. */
export default function Reveal({ children, className, delay = 0, subtle = false }: {
    children: ReactNode;
    className?: string;
    delay?: number;
    /** Use for above-the-fold content so it doesn't visibly dim on load. */
    subtle?: boolean;
}) {
    const reduceMotion = useReducedMotion();
    const from = subtle ? { opacity: 0.65, y: 20 } : { opacity: 0.2, y: 36 };

    return (
        <motion.div
            className={`reveal ${className ?? ""}`}
            initial={false}
            whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: [from.opacity, 1], y: [from.y, 0] }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
