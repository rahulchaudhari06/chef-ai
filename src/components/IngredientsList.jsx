import React, { useState } from "react";
import { getRecipeFromMistral } from "./ai";
import Recipe from "./Recipe";

export default function IngredientsList() {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddIngredient = () => {
    if (inputValue.trim()) {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddIngredient();
    }
  };

  const handleFetchRecipe = async () => {
    setLoading(true);
    setError("");
    try {
      const generatedRecipe = await getRecipeFromMistral(ingredients);
      setRecipe(generatedRecipe);
    } catch (err) {
      setError("Failed to generate recipe. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <div className="add-ingredient-container">
        <input
          className="ingredients-input"
          type="text"
          placeholder="Add an ingredient"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="input-button"
          onClick={handleAddIngredient}
          disabled={!inputValue.trim()}
        >
          Add Ingredient
        </button>
      </div>
      {ingredients.length > 0 && (
        <div className="get-recipe-container">
          <button
            className="get-recipe-button"
            onClick={handleFetchRecipe}
            disabled={loading}
          >
            {loading ? "Generating..." : "Get a recipe"}
          </button>
        </div>
      )}
      {error && <p className="error">{error}</p>}
      <Recipe recipe={recipe} />
    </section>
  );
}
