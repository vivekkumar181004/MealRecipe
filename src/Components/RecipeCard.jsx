// import React from 'react';
// import CustomImage from "./CustomImage"

// const RecipeCard = ({recipe}) => {
//   return (
//            <div className="recipe-card">
//             <CustomImage imgSrc={recipe.image} pt="65%"/>
//             <div className="recipe-card-info">
//                 <img className="auther-img" src={recipe.authorImg} alt=""/>
//                 <p className="recipe-title">{recipe.title}</p>
//                 <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                 <a className="view-btn" href="#!">VIEW RECIPE</a>
//             </div>
//         </div>
//   );
// }

// export default RecipeCard;


import React from "react";
import CustomImage from "./CustomImage";

const RecipeCard = ({ recipe, onView }) => {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="auther-img" src={recipe.authorImg} alt="" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">
          A delicious recipe fetched from MealDB. Click below to explore more!
        </p>
        <button className="view-btn btn" onClick={() => onView(recipe.idMeal)}>
          VIEW RECIPE
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
