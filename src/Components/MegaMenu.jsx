import React from "react";
import { Link } from "react-router-dom";

export const MegaMenu = ({ categories }) => {
  const imag_url = "https://nasksoft.com/nasksoft/public/";

  return (
    <ul className="mega-menu dropdown">
      {categories.map((category) => (
        <li key={category.id} className="category">
          <div className="category-title">
            {category?.icon && (
              <img
                src={`${imag_url}${category?.icon}`}
                width="25"
                height="25"
                className="rounded"
                alt="icon"
              />
            )}
            <Link to={`/service/${category?.id}`}>{category.name}</Link>
          </div>
          <ul
            className="services-menu mb-3 dropdown-menu-end"
            style={category?.icon ? { marginLeft: "35px" } : {}}
          >
            {category.services.map((service) => (
              <li
                key={service.id}
                className="service-menu d-flex align-items-baseline"
              >
                <Link to={`/child-service/${service?.id}`}>
                  <span>
                    <img
                      src={`${imag_url}${service?.image}`}
                      width="25"
                      height="25"
                      className="rounded me-2"
                      alt="nav-service-icons"
                    />
                  </span>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
