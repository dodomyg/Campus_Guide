import React, { useState } from "react";
import "./Colleges.css";
import List from "../../List.json";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

const Colleges = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="colleges-outer">
      <h1>Browse colleges below</h1>
      <input
        type="text"
        name="search"
        placeholder="Search for Colleges"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="colleges">
        {List.filter((college) => {
          return search.toLowerCase() === ""
            ? college
            : college.college_name.toLowerCase().includes(search);
        }).map((college, index) => (
          <Link style={{ color: "black", textDecoration: "none" }} key={index} to={`/colleges/${college?.college_name}`}>
            <div
              className="box"
            >
              <SchoolIcon />
              <h3>{college.college_name}</h3>
              <p>
                {college.City} , {college.State}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
