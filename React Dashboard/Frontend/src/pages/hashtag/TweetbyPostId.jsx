import React, { useState } from "react";
import "./hashtag.scss"; // Import the CSS file

const GetProfile = () => {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [postIds, setPostIds] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    setData([]); // Clear previous data

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      user_name: userName,
      post_ids: postIds.split(",").map((id) => id.trim()),
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://127.0.0.1:8000/twitter/api/v1/get-tweets-by-id/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1>Scraps Data</h1>
      <div>
        <label htmlFor="userName">Enter Username: </label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="postIds">Enter Post IDs (comma-separated): </label>
        <input
          type="text"
          id="postIds"
          value={postIds}
          onChange={(e) => setPostIds(e.target.value)}
        />
        <button onClick={fetchData}>Click</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        data.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Tweet Content</th>
                <th>Views Count</th>
                <th>Timestamp</th>
                <th>Content Image</th>
                <th>Reply Count</th>
                <th>Like Count</th>
                <th>Repost Count</th>
                <th>Bookmark Count</th>
              </tr>
            </thead>
            <tbody>
              {data.map((post, index) => (
                <tr key={post.timestamp + index}>
                  <td>{post.username}</td>
                  <td>{post.TweetContent}</td>
                  <td>{post.views_count}</td>
                  <td>{new Date(post.timestamp).toLocaleString()}</td>
                  <td>
                    {post.content_image && (
                      <img
                        src={post.content_image}
                        alt="content"
                        style={{ width: "100px" }}
                      />
                    )}
                  </td>
                  <td>{post.reply_count}</td>
                  <td>{post.like_count}</td>
                  <td>{post.repost_count}</td>
                  <td>{post.bookmark_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
};

export default GetProfile;
