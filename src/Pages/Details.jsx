
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [drink, setDrink] = useState([]);
  const { strCategory } = useParams();
  console.log(strCategory, "Category,");

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDrink(data.drinks);
        console.log(data.drinks);
      });
  }, []);

  const handleAddToCart = (drinkId) => {
    alert(`Added drink with ID ${drinkId} to cart!`);
  };

  return (
    <div className="grid grid-cols-5 gap-3 mt-8">
      {drink.map((d) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={d.idDrink}>
          <img src={d.strDrinkThumb} className="rounded-2xl" alt="Drinks" srcSet="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{d.idDrink}</div>
            <p className="text-gray-700 text-base">{d.strDrink}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => handleAddToCart(d.idDrink)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
