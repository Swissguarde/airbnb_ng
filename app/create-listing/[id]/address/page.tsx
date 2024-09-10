"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import { getNigeriaStates, getLGAs, StateCodes } from "geo-ng";
import { Label } from "@/components/ui/label";

export default function AddressPage() {
  const [location, setLocation] = useState("");
  const nigeriaStates = getNigeriaStates();
  const [local, setLocal] = useState<StateCodes | null>(null);

  return (
    <>
      <h2 className="mx-auto mt-10 px-4 text-xl font-semibold tracking-tight transition-colors md:w-3/5 md:text-3xl">
        Where is your home located?
      </h2>

      <div className="mx-auto mt-10 w-full px-4 md:w-3/5">
        <div className="mb-5 space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-semibold tracking-wide">State</Label>
            <Select required onValueChange={(value) => setLocation(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>STATES</SelectLabel>
                  {nigeriaStates.map((item) => {
                    const { name } = item;
                    return (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-semibold tracking-wide">
              Local Government Area
            </Label>

            <Select
              disabled={location === ""}
              required
              onValueChange={(value) => setLocal(value as StateCodes)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select LGA" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Local Government Area</SelectLabel>
                  {getLGAs(location.substring(0, 2) as StateCodes).map(
                    (item) => {
                      return (
                        <SelectItem value={item} key={item}>
                          {item}
                        </SelectItem>
                      );
                    },
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* <LazyMap location={location} /> */}
      </div>
    </>
  );
}
