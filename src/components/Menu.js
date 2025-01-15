// src/components/Menu.js
import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"; // Ensure you have relevant styles defined in Menu.css

function Menu() {
  return (
    <div className="sidebar">
      <Link to="/" className="active">
        {/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 17.99V14.99M9.02 2.83999L3.63 7.03999C2.73 7.73999 2 9.22999 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28999 21.19 7.73999 20.2 7.04999L14.02 2.71999C12.62 1.73999 10.37 1.78999 9.02 2.83999Z"
            stroke="#C9DDFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="white"
          />
        </svg>
        Home
      </Link>

      <Link to="/about">
        <svg
          
          stroke="#C9DDFF"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
        >
          <path d="M 25 1 C 11.222656 1 0 10.878906 0 23.1875 C 0 29.234375 2.773438 34.664063 7.21875 38.6875 C 6.546875 40.761719 5.046875 42.398438 3.53125 43.65625 C 2.714844 44.332031 1.933594 44.910156 1.3125 45.46875 C 1.003906 45.746094 0.722656 46.027344 0.5 46.375 C 0.277344 46.722656 0.078125 47.21875 0.21875 47.75 L 0.34375 48.15625 L 0.6875 48.375 C 1.976563 49.117188 3.582031 49.246094 5.3125 49.125 C 7.042969 49.003906 8.929688 48.605469 10.78125 48.09375 C 14.375 47.101563 17.75 45.6875 19.53125 44.90625 C 21.289063 45.273438 23.054688 45.5 24.90625 45.5 C 38.683594 45.5 49.90625 35.621094 49.90625 23.3125 C 49.90625 11.007813 38.78125 1 25 1 Z M 25 3 C 37.820313 3 47.90625 12.214844 47.90625 23.3125 C 47.90625 34.402344 37.730469 43.5 24.90625 43.5 C 23.078125 43.5 21.355469 43.320313 19.625 42.9375 L 19.28125 42.84375 L 19 43 C 17.328125 43.738281 13.792969 45.179688 10.25 46.15625 C 8.476563 46.644531 6.710938 47.019531 5.1875 47.125 C 4.167969 47.195313 3.539063 46.953125 2.84375 46.78125 C 3.339844 46.355469 4.019531 45.847656 4.8125 45.1875 C 6.554688 43.742188 8.644531 41.730469 9.375 38.75 L 9.53125 38.125 L 9.03125 37.75 C 4.625 34.015625 2 28.875 2 23.1875 C 2 12.097656 12.175781 3 25 3 Z M 23.8125 12.8125 C 23.511719 12.8125 23.40625 12.988281 23.40625 13.1875 L 23.40625 15.8125 C 23.40625 16.113281 23.613281 16.1875 23.8125 16.1875 L 26.1875 16.1875 C 26.488281 16.1875 26.59375 16.011719 26.59375 15.8125 L 26.59375 13.1875 C 26.59375 12.886719 26.386719 12.8125 26.1875 12.8125 Z M 23.90625 20.09375 C 23.605469 20.09375 23.5 20.300781 23.5 20.5 L 23.5 33.90625 C 23.5 34.207031 23.707031 34.3125 23.90625 34.3125 L 23.90625 34.40625 L 26.1875 34.40625 C 26.488281 34.40625 26.59375 34.199219 26.59375 34 L 26.59375 20.5 C 26.59375 20.199219 26.386719 20.09375 26.1875 20.09375 Z" />
        </svg>
        About
      </Link>
      <Link to="/contact">
        <svg
          fill="white"
          stroke="#C9DDFF"
          // fill="#C9DDFF"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20,1H4A1,1,0,0,0,3,2V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V2A1,1,0,0,0,20,1ZM19,21H5V3H19ZM9,8.5a3,3,0,1,1,3,3A3,3,0,0,1,9,8.5Zm-2,9a5,5,0,0,1,10,0,1,1,0,0,1-2,0,3,3,0,0,0-6,0,1,1,0,0,1-2,0Z" />
        </svg>
        Contact
      </Link>
      <Link to="/invoice">
        <svg
          fill="white"
          stroke="#C9DDFF"
          width="50px"
          height="50px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="3"
          // fill="none"
        >
          <path
            d="M45.77,51a.09.09,0,0,1,.11,0l3.4,3.31s.12,0,.12-.07V9.7H14.6V54.16a.08.08,0,0,0,.13.07l4.38-3.29a.08.08,0,0,1,.1,0l4.53,3.33a.08.08,0,0,0,.11,0l4-3.33s.07,0,.11,0l4.52,3.32a.08.08,0,0,0,.11,0L36.79,51a.09.09,0,0,1,.12,0l4.51,3.31a.09.09,0,0,0,.12,0l4-3.3"
            stroke-linecap="round"
          />
          <line
            x1="18.72"
            y1="31.11"
            x2="32.02"
            y2="31.11"
            stroke-linecap="round"
          />
          <line
            x1="18.72"
            y1="25.77"
            x2="34.69"
            y2="25.77"
            stroke-linecap="round"
          />
          <line x1="18.72" y1="15" x2="36.05" y2="15" stroke-linecap="round" />
          <line
            x1="18.72"
            y1="20.11"
            x2="33.15"
            y2="20.11"
            stroke-linecap="round"
          />
          <line
            x1="41.01"
            y1="30.95"
            x2="45.28"
            y2="30.95"
            stroke-linecap="round"
          />
          <line
            x1="18.72"
            y1="36.81"
            x2="34.69"
            y2="36.81"
            stroke-linecap="round"
          />
          <line
            x1="41.86"
            y1="36.66"
            x2="45.28"
            y2="36.66"
            stroke-linecap="round"
          />
          <line
            x1="41.01"
            y1="42.56"
            x2="45.28"
            y2="42.56"
            stroke-linecap="round"
          />
          <line
            x1="41.01"
            y1="25.61"
            x2="45.28"
            y2="25.61"
            stroke-linecap="round"
          />
          <line
            x1="41.86"
            y1="20.11"
            x2="45.28"
            y2="20.11"
            stroke-linecap="round"
          />
          <line x1="41.01" y1="15" x2="45.28" y2="15" stroke-linecap="round" />
        </svg>
        Invoice Generator
      </Link>
      <Link to="/addInvoice">
        <svg
          fill="white"
          stroke="#C9DDFF"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M5.01112 11.5747L6.29288 10.2929C6.68341 9.90236 7.31657 9.90236 7.7071 10.2929C8.09762 10.6834 8.09762 11.3166 7.7071 11.7071L4.7071 14.7071C4.51956 14.8946 4.26521 15 3.99999 15C3.73477 15 3.48042 14.8946 3.29288 14.7071L0.292884 11.7071C-0.0976406 11.3166 -0.0976406 10.6834 0.292884 10.2929C0.683408 9.90236 1.31657 9.90236 1.7071 10.2929L3.0081 11.5939C3.22117 6.25933 7.61317 2 13 2C18.5229 2 23 6.47715 23 12C23 17.5228 18.5229 22 13 22C9.85817 22 7.05429 20.5499 5.22263 18.2864C4.87522 17.8571 4.94163 17.2274 5.37096 16.88C5.80028 16.5326 6.42996 16.599 6.77737 17.0283C8.24562 18.8427 10.4873 20 13 20C17.4183 20 21 16.4183 21 12C21 7.58172 17.4183 4 13 4C8.72441 4 5.23221 7.35412 5.01112 11.5747ZM13 5C13.5523 5 14 5.44772 14 6V11.5858L16.7071 14.2929C17.0976 14.6834 17.0976 15.3166 16.7071 15.7071C16.3166 16.0976 15.6834 16.0976 15.2929 15.7071L12.2929 12.7071C12.1054 12.5196 12 12.2652 12 12V6C12 5.44772 12.4477 5 13 5Z"
            stroke="#C9DDFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            // fill="none"
          />
        </svg>
        Added Invoice
      </Link>
    </div>
  );
}

export default Menu;