import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  // console.log(loggedInUser);

  useEffect(() => {
    fetch("https://hidden-mesa-38104.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsAdmin(data);
      });
  }, []);

  return (
    <div
      className="sidebar  flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        {/* <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li> */}
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon icon={faCalendar} /> <span>dashboard</span>
          </Link>
        </li>
        {!isAdmin && (
          <li>
            <Link to="/review" className="text-white">
              <FontAwesomeIcon icon={faFileAlt} /> <span>Add Review</span>
            </Link>
          </li>
        )}
        {isAdmin && (
          <div>
            <li>
              <Link to="/addAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/addPackage" className="text-white">
                <FontAwesomeIcon icon={faFileAlt} /> <span>Add Packages</span>
              </Link>
            </li>
            <li>
              <Link to="/manage" className="text-white">
                <FontAwesomeIcon icon={faCog} /> <span>Manage Packages</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
