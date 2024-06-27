import React, { useState } from "react";
import "./hashtag.scss"; // Import the CSS file

const GetProfile = () => {
  const [data, setData] = useState([]);
  const [hashtag, setHashtag] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    setData([]); // Clear previous data

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      hashtags: hashtag,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://127.0.0.1:8000/twitter/api/v1/get-tweet-hashtag/",
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
      <h1>Hashtag Tweets Data</h1>
      <div>
        <label htmlFor="hashtag">Enter Hashtag: </label>
        <input
          type="text"
          id="hashtag"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
        />
        <button onClick={fetchData}>Fetch Tweets</button>
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
                <th>Timestamp</th>
                <th>Tweet Content</th>
                <th>Reply Count</th>
                <th>Retweet Count</th>
                <th>Like Count</th>
              </tr>
            </thead>
            <tbody>
              {data.map((tweet, index) => (
                <tr key={tweet.Timestamp + index}>
                  <td>{new Date(tweet.Timestamp).toLocaleString()}</td>
                  <td>{tweet.TweetContent}</td>
                  <td>{tweet.Reply}</td>
                  <td>{tweet.Retweet}</td>
                  <td>{tweet.Likes}</td>
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
