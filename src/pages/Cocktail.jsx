import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

import { useQuery } from "@tanstack/react-query";

const cocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      // console.log(data);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    //const { data } = await axios.get(`${singleCocktailUrl}${id}`);
    await queryClient.ensureQueryData(cocktailQuery(id));

    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(cocktailQuery(id));
  //console.log(data.drinks);
  if (!data.drinks) return <Navigate to="/" />;
  const singleDrink = data.drinks[0];
  const ingredients = [];
  Object.keys(singleDrink).some(function (key) {
    if (key.includes("strIngredient") && singleDrink[key]) {
      ingredients.push(singleDrink[key]);
    }
  });
  const measures = [];
  Object.keys(singleDrink).some(function (key) {
    if (key.includes("strMeasure") && singleDrink[key]) {
      measures.push(singleDrink[key]);
    }
  });
  console.log("ingredients: " + ingredients);
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {ingredients.map((ingredient, index) => {
              return (
                <span className="ing" key={index}>
                  {measures[index]} {ingredient}
                  {index < ingredients.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
