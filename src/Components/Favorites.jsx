export default function Favorites({ favorites, onSelect, toggleFavorite }) {
  if (!favorites.length) return null;

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">⭐ Favorites</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {favorites.map((meal) => (
          <div key={meal.idMeal} className="bg-white p-2 rounded shadow">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-24 object-cover rounded"
            />
            <h4 className="text-sm mt-1">{meal.strMeal}</h4>
            <div className="flex justify-between text-xs mt-1">
              <button
                onClick={() => onSelect(meal)}
                className="text-blue-500"
              >
                View
              </button>
              <button
                onClick={() => toggleFavorite(meal)}
                className="text-yellow-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
