import {
  StyledRecipesContainer,
  StyledRecipes,
} from "../styledComponents/Recipes.styled";
import recipesData from "../datas/recipes.json";
import { useEffect, useState } from "react";
import { ConfigRecipes } from "../interfaces";

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<ConfigRecipes[]>([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <StyledRecipesContainer>
      <h2>Recipes</h2>
      <StyledRecipes>
        {recipes.map((item: ConfigRecipes) => {
          return (
            <div key={item.id} className="recipes">
              <img src={item.url} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
            </div>
          );
        })}
      </StyledRecipes>
    </StyledRecipesContainer>
  );
};

export default Recipes;
