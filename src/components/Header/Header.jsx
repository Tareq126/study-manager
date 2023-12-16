import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header flex m-20 items-center">
        <div>
          <img
            className="w-24 h-16 ml-4 rounded"
            src="/src/images/book-148200_640.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="text-4xl bold ml-4 text-green-700">Study Manager</div>
      </div>
    </div>
  );
};

export default Header;
