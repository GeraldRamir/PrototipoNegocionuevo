"use client";

import { Check, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { Button, type ButtonVariant } from "./Button";

export function AddToOrderButton({
  item,
  label,
  addedLabel,
  variant,
  className = "",
}: {
  item: { id: string; name: string };
  label: string;
  addedLabel: string;
  variant: ButtonVariant;
  className?: string;
}) {
  const add = useCart((state) => state.add);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const id = window.setTimeout(() => setAdded(false), 1400);
    return () => window.clearTimeout(id);
  }, [added]);

  return (
    <Button
      variant={variant}
      size="sm"
      className={className}
      onClick={() => {
        add(item);
        setAdded(true);
      }}
      aria-label={`${label}: ${item.name}`}
    >
      {added ? <Check className="h-4 w-4" aria-hidden /> : <Plus className="h-4 w-4" aria-hidden />}
      <span aria-live="polite">{added ? addedLabel : label}</span>
    </Button>
  );
}
