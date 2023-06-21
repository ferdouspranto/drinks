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
 
  return (
    
  <div className="grid grid-cols-5
   gap-3 mt-8">
      {drink.map((d) => {
        return (
          <div class="max-w-sm rounded overflow-hidden shadow-lg ">
            <img src={d.strDrinkThumb} className='rounded-2xl' alt="Drinks" srcset="" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{d.idDrink}</div>
              <p class="text-gray-700 text-base">{d.strDrink}</p>
            </div>
          </div>
        );
      })}
    
  </div>
  );
};

export default Details;
