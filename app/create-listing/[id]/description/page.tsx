import Counter from "@/app/components/button/counter";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function DescriptionPage() {
  return (
    <>
      <h2 className="mx-auto mt-10 px-4 text-xl font-semibold tracking-tight transition-colors md:w-3/5 md:text-3xl">
        Describe your home
      </h2>

      <div className="mx-auto mb-36 mt-10 flex w-full flex-col gap-y-5 px-4 md:w-3/5">
        <hr />
        <div className="flex flex-col gap-y-2">
          <Label>Title</Label>
          <Input
            name="title"
            type="text"
            required
            placeholder="Short & Simple"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>Description</Label>
          <Textarea
            name="description"
            required
            placeholder="Please describe your home"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>Price</Label>
          <Input
            name="price"
            type="number"
            required
            placeholder="Price per night (NGN)"
            min={1000}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>Image</Label>
          <Input name="image" type="file" required />
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="font-medium underline">Guests</h2>
                <p className="text-sm text-muted-foreground">
                  How many guests?
                </p>
              </div>

              <Counter name="guests" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="font-medium underline">Bedrooms</h2>
                <p className="text-sm text-muted-foreground">
                  Number of bedroom(s) in the building?
                </p>
              </div>

              <Counter name="bedrooms" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="font-medium underline">Bathrooms</h2>
                <p className="text-sm text-muted-foreground">
                  Number of bathroom(s) in the building?
                </p>
              </div>

              <Counter name="bathrooms" />
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
