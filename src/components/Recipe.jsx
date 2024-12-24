import ReactMarkdown from "react-markdown";

export default function Recipe({ recipe }) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Recommends:</h2>
      {recipe ? (
        <div className="recipe-content">
          <ReactMarkdown>{recipe}</ReactMarkdown>
        </div>
      ) : (
        <div className="empty-state">
          <p>
            No recipe generated yet. Add ingredients and click "Get a recipe!"
            🍳
          </p>
        </div>
      )}
    </section>
  );
}
