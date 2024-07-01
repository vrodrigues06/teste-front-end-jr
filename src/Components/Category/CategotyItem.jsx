import React from "react";

const CategotyItem = ({ type, icon, alt }) => {
  return (
    <div>
      <a href={`/${type}`}>
        <div className="categoryIconWrapper">
          <img src={icon} alt={alt} />
        </div>
      </a>
      <p className={`categoryType ${type === "Tecnologia" ? "active" : ""}`}>
        {type}
      </p>
    </div>
  );
};

export default CategotyItem;
