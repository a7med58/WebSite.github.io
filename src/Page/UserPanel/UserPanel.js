import { faAdd, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserPanel.css";

function UserPanel() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <section className="user-panel">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h1>Welcome to your user panel</h1>
            {authenticated ? (
              <div className="user-panel-icon">
                <Link to="/addpost">
                  <i>
                    <FontAwesomeIcon icon={faAdd} />
                    Add Post
                  </i>
                </Link>

                <Link to="/viewposts">
                  <i>
                    <FontAwesomeIcon icon={faUsersViewfinder} />
                    My Posts
                  </i>
                </Link>
                </div>
            ) : null}
            {!authenticated && <p>Please log in to View Panel.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserPanel;
