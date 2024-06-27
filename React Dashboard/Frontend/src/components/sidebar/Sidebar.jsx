import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  const [twitterDropdownOpen, setTwitterDropdownOpen] = useState(false);
  const [facebookDropdownOpen, setFacebookDropdownOpen] = useState(false);
  const [instagramDropdownOpen, setInstagramDropdownOpen] = useState(false);

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("authToken");
    console.log("User logged out");
    navigate("/login");
  };

  const handleToggle = (platform) => {
    if (platform === "twitter") {
      setTwitterDropdownOpen(!twitterDropdownOpen);
      setFacebookDropdownOpen(false);
      setInstagramDropdownOpen(false);
    } else if (platform === "facebook") {
      setFacebookDropdownOpen(!facebookDropdownOpen);
      setTwitterDropdownOpen(false);
      setInstagramDropdownOpen(false);
    } else if (platform === "instagram") {
      setInstagramDropdownOpen(!instagramDropdownOpen);
      setTwitterDropdownOpen(false);
      setFacebookDropdownOpen(false);
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Client Name</span>
      </div>
      <br />
      <hr />
      <div className="bottom">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <h2
            onClick={() => handleToggle("twitter")}
            style={{ cursor: "pointer" }}
          >
            Twitter
          </h2>
          {twitterDropdownOpen && (
            <div className="dropdown">
              <Link to="/UserProfile" style={{ textDecoration: "none" }}>
                <p className="title">Get UserProfile</p>
              </Link>
              <Link to="/Hashtag" style={{ textDecoration: "none" }}>
                <p className="title">Get Tweets by Hashtag</p>
              </Link>
              <Link to="/TrendingHashtag" style={{ textDecoration: "none" }}>
                <p className="title">Get Trending Hashtags</p>
              </Link>
              <Link to="/TweetbyPostId" style={{ textDecoration: "none" }}>
                <p className="title">Get Tweet by Post IDs</p>
              </Link>
              <Link to="/CommentsForTweets" style={{ textDecoration: "none" }}>
                <p className="title">Get Comments for Tweets</p>
              </Link>
            </div>
          )}
          <h2
            onClick={() => handleToggle("facebook")}
            style={{ cursor: "pointer" }}
          >
            Facebook
          </h2>
          {facebookDropdownOpen && (
            <div className="dropdown">
              <Link to="/users" style={{ textDecoration: "none" }}>
                <p className="title">Get UserProfile</p>
              </Link>
              <Link
                to="/fb-posts-by-hashtag"
                style={{ textDecoration: "none" }}
              >
                <p className="title">Get Posts by Hashtag</p>
              </Link>
              <Link
                to="/fb-trending-hashtags"
                style={{ textDecoration: "none" }}
              >
                <p className="title">Get Trending Hashtags</p>
              </Link>
              <Link
                to="/fb-posts-by-post-ids"
                style={{ textDecoration: "none" }}
              >
                <p className="title">Get Post by IDs</p>
              </Link>
            </div>
          )}
          <h2
            onClick={() => handleToggle("instagram")}
            style={{ cursor: "pointer" }}
          >
            Instagram
          </h2>
          {instagramDropdownOpen && (
            <div className="dropdown">
              <Link to="/users" style={{ textDecoration: "none" }}>
                <p className="title">Get UserProfile</p>
              </Link>
              <Link
                to="/ig-posts-by-hashtag"
                style={{ textDecoration: "none" }}
              >
                <p className="title">Get Posts by Hashtag</p>
              </Link>
              <Link
                to="/ig-trending-hashtags"
                style={{ textDecoration: "none" }}
              >
                <p className="title">Get Trending Hashtags</p>
              </Link>
              <Link
                to="/ig-posts-by-post-ids"
                style={{ textDecoration: "none" }}
              >
                <p className="title">Get Post by IDs</p>
              </Link>
            </div>
          )}
        </ul>
        <hr />
        <br />
        <br />
        <li>
          <button
            onClick={handleLogout}
            style={{
              background: "none",
              border: "none",
              padding: "0",
              cursor: "pointer",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </button>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
