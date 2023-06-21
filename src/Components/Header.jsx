// import React, { useState } from "react";
// import logo1 from "./../assets/Images/logo1.jpg";
// import { IoSearchOutline } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";

// function Header() {
//   const navigate = useNavigate();
//   const [activeButton, setActiveButton] = useState("");

//   const handleNavigation = (path) => {
//     setActiveButton(path);
//     navigate(path);
//   };

//   return (
//     <div className="flex justify-between items-center">
//       <Link to="/">
//         <img src={logo1} className="w-[180px]" alt="Logo" />
//       </Link>
//       <ul className="hidden md:flex gap-4 md:gap-14">
//         <li
//           className={`hover:font-bold cursor-pointer ${
//             activeButton === "/" ? "font-bold" : ""
//           }`}
//           onClick={() => handleNavigation("/")}
//         >
//           Home
//         </li>
//         <li
//           className={`hover:font-bold cursor-pointer ${
//             activeButton === "/about" ? "font-bold" : ""
//           }`}
//           onClick={() => handleNavigation("/about")}
//         >
//           About Us
//         </li>
//         <li
//           className={`hover:font-bold cursor-pointer ${
//             activeButton === "/contact" ? "font-bold" : ""
//           }`}
//           onClick={() => handleNavigation("/contact")}
//         >
//           Contact Us
//         </li>
//       </ul>
//       <div className="flex items-center">
//         <input
//           type="text"
//           placeholder="Search"
//           className="border border-gray-300 rounded-md px-4 py-2"
//         />
//         <IoSearchOutline className="text-gray-500 ml-2" />
//       </div>
//     </div>
//   );
// }

// export default Header;
import React, { useState } from "react";
import logo1 from "./../assets/Images/logo1.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");

  const handleNavigation = (path) => {
    if (path === "/") {
      setActiveButton("");
    } else {
      setActiveButton(path);
    }
    navigate(path);
  };

  return (
    <div className="flex justify-between items-center">
      <Link to="/" onClick={() => handleNavigation("/")}>
        <img src={logo1} className="w-[180px]" alt="Logo" />
      </Link>
      <ul className="hidden md:flex gap-4 md:gap-14">
        <li
          className={`hover:font-bold cursor-pointer ${
            activeButton === "/" ? "font-bold" : ""
          }`}
          onClick={() => handleNavigation("/")}
        >
          Home
        </li>
        <li
          className={`hover:font-bold cursor-pointer ${
            activeButton === "/about" ? "font-bold" : ""
          }`}
          onClick={() => handleNavigation("/about")}
        >
          About Us
        </li>
        <li
          className={`hover:font-bold cursor-pointer ${
            activeButton === "/contact" ? "font-bold" : ""
          }`}
          onClick={() => handleNavigation("/contact")}
        >
          Contact Us
        </li>
      </ul>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <IoSearchOutline className="text-gray-500 ml-2" />
      </div>
    </div>
  );
}

export default Header;
