import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <footer className="navigation">
      <nav className="navigation_nav">
        <ul className="navigation_list">
          <li
            id="search"
            className="navigation_item "
            onClick={() => navigate("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="navigation_svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className="navigation_item_title">Create Ticket</p>
          </li>
          <li
            className="navigation_item"
            onClick={() => navigate("/basvuru-sorgula")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="navigation_svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="navigation_item_title">Search</p>
          </li>
          <li className="navigation_item" onClick={() => navigate("/admin")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="navigation_svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <p className="navigation_item_title">Admin</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
