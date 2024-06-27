import React, { useState } from "react";
import "./GetProfile.css";
const GetProfile = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    setData([]); 

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      Profile_name: title,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/twitter/api/v1/get-profile/", requestOptions)
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
    <div className="containerr">
      <div className="Table">
        <h1>Scraps User Profile</h1>
        <label htmlFor="title">Enter Name: </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
                <th>Name</th>
                <th>UserTag</th>
                <th>Timestamp</th>
                <th>TweetContent</th>
                <th>Reply</th>
                <th>Retweet</th>
                <th>Likes</th>
              </tr>
            </thead>
            <tbody>
              {data.map((post, index) => (
                <tr key={post.Timestamp + index}>
                  <td>{post.Name}</td>
                  <td>{post.UserTag}</td>
                  <td>{new Date(post.Timestamp).toLocaleString()}</td>
                  <td>{post.TweetContent}</td>
                  <td>{post.Reply}</td>
                  <td>{post.Retweet}</td>
                  <td>{post.Likes}</td>
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
