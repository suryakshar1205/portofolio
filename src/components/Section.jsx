import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-3xl"
        >
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          {title && <h2 className="section-title">{title}</h2>}
        </motion.div>
      )}
      {children}
    </section>
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
