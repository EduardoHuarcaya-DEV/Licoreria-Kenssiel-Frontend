import { CategoryCard } from "./category-card";
import { getCategories } from "@/services/category-service";

export const CategoryGrid = async () => {
  const categories = await getCategories();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {categories.map((category) => (
        <CategoryCard key={category.id_category} category={category} />
      ))}
    </div>
  );
};
