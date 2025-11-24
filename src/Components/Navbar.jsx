import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


const Navbar = () => {
  let [searchParams] = useSearchParams();
  let [q, setQ] = useState("");
  let [language, setLanguage] = useState("");
  let [search, setSearch] = useState([]);
  let navigate = useNavigate();

  function postSearch(e) {
    e.preventDefault();
    navigate(`/?q=${search}&language=${language}`);
    setSearch("");
  }

  useEffect(() => {
   setQ(searchParams.get("q") ?? "All");
    setLanguage(searchParams.get("language") ?? "en");
  }, [searchParams]);
  return (
    <>
      <div className="nav sticky-top">
        <img src="./src/assets/logo.gif" alt="LOGO" />
        <ul className="gap-4 pt-4 pb-3 ">
          <li>
            <NavLink to=
            {`/?q=All&language=${language}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/?q=World&language=${language}`}>World</NavLink>
          </li>
          <li>
            <NavLink to={`/?q=India&language=${language}`}>India</NavLink>
          </li>
          <li>
            <NavLink to={`/?q=Politics&language=${language}`}>Politics</NavLink>
          </li>
          <li>
            <NavLink to={`/?q=Sports&language=${language}`}>Sports</NavLink>
          </li>
          <li>
            <NavLink to={`/?q=Entertainment&language=${language}`}>Entertainment</NavLink>
          </li>
          <li>
            <NavLink to={`/?q=Business&language=${language}`}>Business</NavLink>
          </li>
          <li>
            <NavLink to={`/?q=Health&language=${language}`}>Health</NavLink>
          </li>
          <li>
            <div className="mydrop">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle border-0 text-light"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Others
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to={`/?q=IPL&language=${language}`}>
                    IPL
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={`/?q=wwe&language=${language}`}>
                    WWE
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={`/?q=Science&language=${language}`}>
                    Science
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={`/?q=Jokes&language=${language}`}>
                    Jokes
                  </NavLink>
                </li>
              </ul>
            </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle border-0 text-light"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Language
              </button>
              <ul className="dropdown-menu z-index-2000">
                <li>
                  <NavLink className="dropdown-item" to={`/?q=${q}&language=en`} >
                    English
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={`/?q=${q}&language=hi`} >
                    Hindi
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="searchbar">
          <form className="d-flex" role="search" onSubmit={postSearch}>
            <input
              className="form-control me-2"
              type="search" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}

              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info" type="submit">
              Explore
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
