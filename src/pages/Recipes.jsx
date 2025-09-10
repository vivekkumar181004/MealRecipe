// import React from 'react';
// import RecipeCard from '../Components/RecipeCard';
// import PreviousSearch from '../Components/PreviousSearch';

// const Recipes = () => {

//         const recipes = [
//         {
//             title: "Chicken Pan Pizza",
//             image: "/img/gallery/img_1.jpg",
//             authorImg: "/img/top-chiefs/img_1.jpg",
//         }, 
//         {
//             title: "Spaghetti and Meatballs",
//             image: "/img/gallery/img_4.jpg",
//             authorImg: "/img/top-chiefs/img_2.jpg",
//         },
//         {
//             title: "American Cheese Burger",
//             image: "/img/gallery/img_5.jpg",
//             authorImg: "/img/top-chiefs/img_3.jpg",
//         },
//         {
//             title: "Mutton Biriyani",
//             image: "/img/gallery/img_6.jpg",
//             authorImg: "/img/top-chiefs/img_5.jpg",
//         },
//         {
//             title: "Japanese Sushi",
//             image: "/img/gallery/img_10.jpg",
//             authorImg: "/img/top-chiefs/img_6.jpg",
//         },
//         {
//             title: "Chicken Pan Pizza",
//             image: "/img/gallery/img_1.jpg",
//             authorImg: "/img/top-chiefs/img_1.jpg",
//         }, 
//         {
//             title: "Spaghetti and Meatballs",
//             image: "/img/gallery/img_4.jpg",
//             authorImg: "/img/top-chiefs/img_2.jpg",
//         },
//         {
//             title: "American Cheese Burger",
//             image: "/img/gallery/img_5.jpg",
//             authorImg: "/img/top-chiefs/img_3.jpg",
//         },
//         {
//             title: "Mutton Biriyani",
//             image: "/img/gallery/img_6.jpg",
//             authorImg: "/img/top-chiefs/img_5.jpg",
//         },
//         {
//             title: "Japanese Sushi",
//             image: "/img/gallery/img_10.jpg",
//             authorImg: "/img/top-chiefs/img_6.jpg",
//         },
//         {
//             title: "American Cheese Burger",
//             image: "/img/gallery/img_5.jpg",
//             authorImg: "/img/top-chiefs/img_3.jpg",
//         },
//         {
//             title: "Mutton Biriyani",
//             image: "/img/gallery/img_6.jpg",
//             authorImg: "/img/top-chiefs/img_5.jpg",
//         }
//     ].sort(() => Math.random() - 0.5)

//   return (
//         <div>
//             <PreviousSearch />
//             <div className="recipes-container">
//                 {recipes.map((recipe, index) => (
//                     <RecipeCard key={index} recipe={recipe} />
//                 ))}
//             </div>
//         </div>
//   );
// }

// export default Recipes;




// import React, { useState, useEffect } from "react";
// import RecipeCard from "../Components/RecipeCard";
// import PreviousSearch from "../Components/PreviousSearch";
// import MealDetails from "../components_2/Mealdetails";

// const Recipes = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("pizza");
//   const [previousSearches, setPreviousSearches] = useState(["pizza"]);
//   const [selectedMeal, setSelectedMeal] = useState(null);

//   // Fetch recipes from MealDB API
//   const fetchRecipes = async (query) => {
//     try {
//       const res = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
//       );
//       const data = await res.json();
//       setRecipes(data.meals || []);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//     }
//   };

//   useEffect(() => {
//     fetchRecipes(searchTerm);
//   }, [searchTerm]);

//   // Handle new search
//   const handleSearch = (query) => {
//     setSearchTerm(query);
//     if (!previousSearches.includes(query)) {
//       setPreviousSearches([query, ...previousSearches]);
//     }
//   };

//   return (
//     <div>
//       <PreviousSearch searches={previousSearches} onSearch={handleSearch} />

//       <div className="recipes-container">
//         {recipes.length > 0 ? (
//           recipes.map((meal) => (
//             <RecipeCard
//               key={meal.idMeal}
//               recipe={meal}
//               onView={() => setSelectedMeal(meal)}
//             />
//           ))
//         ) : (
//           <p style={{ textAlign: "center", marginTop: "20px" }}>
//             No recipes found.
//           </p>
//         )}
//       </div>

//       {/* Modal for meal details */}
//       {selectedMeal && (
//         <MealDetails
//           meal={selectedMeal}
//           onClose={() => setSelectedMeal(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default Recipes;


import React, { useState, useEffect } from "react";
import RecipeCard from "../Components/RecipeCard";
import PreviousSearch from "../Components/PreviousSearch";
import RecipeDetails from "../Components/RecipeDetails";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("pizza");
  const [previousSearches, setPreviousSearches] = useState(["pizza"]);
    const [selectedMealId, setSelectedMealId] = useState(null);

  // Fetch recipes from MealDB API
  const fetchRecipes = async (query) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setRecipes(data.meals || []); // if no result, set empty
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes(searchTerm);
  }, [searchTerm]);

  // Handle new search
  const handleSearch = (query) => {
    setSearchTerm(query);
    if (!previousSearches.includes(query)) {
      setPreviousSearches([query, ...previousSearches]);
    }
  };

  return (
    <div>
       <PreviousSearch searches={previousSearches} onSearch={handleSearch} />
      <div className="recipes-container">
        {recipes.length > 0 ? (
          recipes.map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              recipe={{
                idMeal: meal.idMeal,
                title: meal.strMeal,
                image: meal.strMealThumb,
                authorImg: "/img/top-chiefs/img_1.jpg",
              }}
              onView={(id) => setSelectedMealId(id)}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No recipes found.
          </p>
        )}
      </div>

      {/* Modal for recipe details */}
      {selectedMealId && (
        <RecipeDetails
          mealId={selectedMealId}
          onClose={() => setSelectedMealId(null)}
        />
      )}
    </div>
  );
};

export default Recipes;
