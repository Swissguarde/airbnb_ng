"use client";
import { categoryItems } from "@/app/lib/categoryItems";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

export default function SelectCategory() {
  const [category, setCategory] = useState<string[]>([]);

  const handleCategoryClick = (name: string) => {
    setCategory((prev) => {
      if (prev.includes(name)) {
        return prev.filter((category) => category !== name);
      } else {
        return [...prev, name];
      }
    });
  };
  return (
    <div className="mx-auto mb-36 mt-10 grid w-full grid-cols-2 gap-8 px-10 md:w-3/5 md:grid-cols-3 lg:grid-cols-4">
      <input type="hidden" name="categoryName" value={category as string[]} />
      {categoryItems.map((item) => {
        const { id, image, name, title } = item;
        return (
          <div key={id} className="cursor-pointer">
            <Card
              className={
                category.includes(name) ? "border-2 border-primary" : ""
              }
              onClick={() => handleCategoryClick(name)}
            >
              <CardHeader className="flex flex-col items-center">
                <Image
                  src={image}
                  alt={name}
                  height={32}
                  width={32}
                  className="h-8 w-8"
                />
                <h3 className="text-xs font-medium">{title}</h3>
              </CardHeader>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
