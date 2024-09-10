"use client";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Counter({ name }: { name: string }) {
  const [amount, setAmount] = useState(0);

  const updateAmount = (action: string) => {
    setAmount((prevAmount) => {
      if (action === "decrease" && prevAmount === 0) {
        return prevAmount;
      }
      return action === "increase" ? prevAmount + 1 : prevAmount - 1;
    });
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={() => updateAmount("decrease")}
        variant="outline"
        size="icon"
        type="button"
      >
        <MinusIcon className="h-4 w-4 text-primary" />
      </Button>
      <p className="text-lg font-medium">{amount}</p>
      <Button
        onClick={() => updateAmount("increase")}
        variant="outline"
        size="icon"
        type="button"
      >
        <PlusIcon className="h-4 w-4 text-primary" />
      </Button>
    </div>
  );
}
