import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Category } from "@/interfaces/category-interface";

export const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{category.name}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
          <CardAction>Acciones</CardAction>
        </CardHeader>
        <CardContent>
          <p>Esto es de prueba</p>
        </CardContent>
        <CardFooter>
          <p>Creado: {new Date(category.createdAt).toLocaleDateString()}</p>
          <p>
            Actualizado: {new Date(category.updatedAt).toLocaleDateString()}
          </p>
        </CardFooter>
      </Card>
    </>
  );
};
