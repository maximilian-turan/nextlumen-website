"use client";

import React from 'react';

// Wir definieren, wie ein Item aussehen muss
interface AccordionItemData {
  title: string;
  description: string;
  image: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

// --- Accordion Item Component ---
const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`
        relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
        ${isActive ? 'flex-[3]' : 'flex-1'}
        min-h-[400px] border-r border-white/10 last:border-r-0
      `}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        {isActive && (
          <p className="text-white/80 text-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default function InteractiveImageAccordion({ items }: { items: AccordionItemData[] }) {
  const [activeId, setActiveId] = React.useState(0);

  return (
    <div className="flex w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isActive={activeId === index}
          onMouseEnter={() => setActiveId(index)}
        />
      ))}
    </div>
  );
}