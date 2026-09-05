import {recipes} from "../data";
import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.name}
          category={recipe.category}
          time={recipe.time}
          image={recipe.image}
          description={recipe.description}
          isPopular={recipe.isPopular}
        />
      ))}
    </div>
  );
}