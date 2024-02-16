import React from "react";
import { Link } from "react-router-dom";

export const MegaMenu = ({ categories }) => {
  return (
    <ul className="mega-menu">
      {categories.map((category) => (
        <li
          key={category.id}
          className="category"
          style={category?.services?.length > 20 ? { columnCount: "4" } : {}}
        >
          <div className="category-title">{category.name}</div>
          <ul className="services-menu mb-3">
            {category.services.map((service) => (
              <li key={service.id} className="service-menu">
                <Link to="/">{service.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
