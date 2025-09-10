import React, { useEffect, useState } from "react";

const RecipeDetails = ({ mealId, onClose }) => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    if (mealId) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then((res) => res.json())
        .then((data) => setMeal(data.meals ? data.meals[0] : null));
    }
  }, [mealId]);

  if (!mealId) return null;


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {meal ? (
          <>
            <button className="close-btn" onClick={onClose}>
              ✖
            </button>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="modal-img" />
            <p>
              <strong>Category:</strong> {meal.strCategory}
            </p>
            <p>
              <strong>Area:</strong> {meal.strArea}
            </p>
            <p>
              <strong>Instructions:</strong>
            </p>
            <p className="instructions">{meal.strInstructions}</p>

            <h3>Ingredients</h3>
            <ul>
              {Array.from({ length: 20 }, (_, i) => i + 1)
                .map((i) => ({
                  ingredient: meal[`strIngredient${i}`],
                  measure: meal[`strMeasure${i}`],
                }))
                .filter((item) => item.ingredient)
                .map((item, idx) => (
                  <li key={idx}>
                    {item.ingredient} - {item.measure}
                  </li>
                ))}
            </ul>
            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-link"
              >
                ▶ Watch on YouTube
              </a>
            )}
          </>
        ) : (
          <p>Loading recipe details...</p>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
