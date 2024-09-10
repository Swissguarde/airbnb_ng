import BottomBar from "@/app/components/button/bottom-bar";
import SelectCategory from "@/app/components/listing/select-category";

export default function StructurePage() {
  return (
    <>
      <h2 className="mx-auto mt-10 px-10 text-xl font-semibold tracking-tight transition-colors md:w-3/5 md:text-3xl">
        Which of these best describe your home?
      </h2>

      <form>
        <SelectCategory />
        <BottomBar />
      </form>
    </>
  );
}
