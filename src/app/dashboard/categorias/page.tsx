import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { CategoryGrid } from "./components/category-grid";

export default function CategoriasPage() {
  return (
    <>
      <section>
        <h1 className="text-xl md:text-2xl block mb-10">Categorías</h1>
        <div className="flex justify-end mb-5">
          <Button>
            <CirclePlus className="mr-2" />
            Nueva Categoría
          </Button>
        </div>
        <div className="overflow-x-auto mt-10">
          <CategoryGrid />
        </div>
      </section>
    </>
  );
}
