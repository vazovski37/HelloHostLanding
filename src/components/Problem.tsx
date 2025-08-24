'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, ReactNode } from "react";
import { ArrowRightLeft, Frown, GitBranchPlus } from "lucide-react";

// --- A simple hook to check for screen size ---
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check on initial mount
    checkScreenSize();

    // Add event listener to check on resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};
// ---------------------------------------------


const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeIn" },
  }),
};

const cards = [
  {
    icon: ArrowRightLeft,
    title: "Fragmented Communication",
    text: "Hours lost daily coordinating between front desk, housekeeping, and maintenance over radios and paper logs.",
  },
  {
    icon: Frown,
    title: "Guest Experience Suffers",
    text: "Slow response times and missed details lead to negative reviews and lost revenue.",
  },
  {
    icon: GitBranchPlus,
    title: "Operational Chaos",
    text: "Juggling multiple, complex systems that don't talk to each other creates friction for your team.",
  },
];


// --- Mobile Version of the Component ---
const MobileProblem = () => (
  <section className="bg-[var(--color-background)] py-20 sm:py-28 px-6">
    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center">
      {/* Headline */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Running a Hotel Shouldn’t Be This Disconnected.
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-lg text-[var(--color-text-secondary)] mt-6 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hotels today still rely on outdated processes and siloed systems that slow everything down.
      </motion.p>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 gap-8 w-full">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[var(--color-content)] rounded-[var(--rounded-soft)] p-8 border border-white/10"
          >
            <card.icon className="h-10 w-10 text-[var(--color-primary)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">{card.title}</h3>
            <p className="text-[var(--color-text-secondary)]">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Desktop Version of the Component ---
const DesktopProblem = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.7], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [0.6, 1]);

    return (
        <section ref={ref} className="relative h-[300vh] bg-[var(--color-background)]">
            <motion.div
                style={{ scale, opacity }}
                className="sticky top-0 h-screen flex flex-col justify-center items-center px-6"
            >
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] text-center max-w-3xl"
                    variants={textVariants} initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} custom={0}
                >
                    Running a Hotel Shouldn’t Be This Disconnected.
                </motion.h2>

                <motion.p
                    className="text-lg text-[var(--color-text-secondary)] mt-6 text-center max-w-2xl"
                    variants={textVariants} initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} custom={1}
                >
                    Hotels today still rely on outdated processes and siloed systems that slow everything down.
                </motion.p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-[var(--color-content)] rounded-[var(--rounded-soft)] p-8 border border-white/10"
                        >
                            <card.icon className="h-10 w-10 text-[var(--color-primary)] mb-4" />
                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">{card.title}</h3>
                            <p className="text-[var(--color-text-secondary)]">{card.text}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};


// --- Main Component ---
export function Problem() {
  const isMobile = useIsMobile();

  // Render the mobile version if the screen is small, otherwise render the desktop version.
  return isMobile ? <MobileProblem /> : <DesktopProblem />;
}