import React, { useEffect, useState } from "react";
import bannermain from '../assets/Images/bannermain.png'
import GlobalApi from "../Services/GlobalApi";
import {  Link } from "react-router-dom";
 

function Home() {
  const [post, setPost] = useState([]);
  const [orgPost, setOrgPost] = useState([]);
 
  useEffect(() => {
    getPost();
  }, []);
  const getPost = () => {
    GlobalApi.getPost.then((resp) => {
      console.log(resp.data.drinks, "data");
      const drinks = resp.data.drinks;
      setPost(drinks);
    });
  };
 
  
  return ( 
    <>
    <div className="flex justify-center mt-8">
  <img src={bannermain} alt="Banner" className="rounded-2xl" />
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
  {post.map((d) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{d.strCategory}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link to={`/details/${d.strCategory}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              View
            </button>
          </Link>
        </div>
      </div>
    );
  })}
</div>
    </>
  );
}

export default Home;

