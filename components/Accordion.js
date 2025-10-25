import { useState } from "react";
import styles from "@/styles/Home.module.css";

const AccordionItem = ({ item, isOpen, onToggle }) => (
  <div>
    <button
      type="button"
      className={styles.accordionHeader}
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <div>
        <p className={styles.accordionTitle}>{item.title}</p>
      </div>
      <span className={styles.accordionIcon}>+</span>
    </button>
    <div
      className={styles.accordionContent}
      style={{
        maxHeight: isOpen ? "400px" : "0",
        transition: "max-height 0.35s ease",
      }}
      aria-hidden={!isOpen}
    >
      <div className={styles.accordionPanel}>{item.content}</div>
    </div>
  </div>
);

export default function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className={styles.accordionCard}>
      {items.map((item, idx) => (
        <AccordionItem
          key={item.title}
          item={item}
          isOpen={idx === openIndex}
          onToggle={() => setOpenIndex(idx === openIndex ? -1 : idx)}
        />
      ))}
    </div>
  );
}
