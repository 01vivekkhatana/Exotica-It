import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import "./style/dark.scss";

import UserProfile from "./pages/customers/UserProfile";
import { DarkModeContext } from "./context/darkModeContext";
import Link2 from "./pages/TwitterScrap/Link2";
import Link3 from "./pages/TwitterScrap/Link3";
import Link4 from "./pages/TwitterScrap/Link4";
import Linkk2 from "./pages/TwitterScrap/LInkk2";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/TrendingHashtag" element={<Link2 />} />
          <Route path="/TweetbyPostId" element={<Link3 />} />
          <Route path="/CommentsForTweets" element={<Link4 />} />
          <Route path="/Hashtag" element={<Linkk2 />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
