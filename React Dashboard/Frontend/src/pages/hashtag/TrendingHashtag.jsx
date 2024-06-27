import React, { useState } from "react";
import "./hashtag.scss"; // Import the CSS file

const TrendingHashtag = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    setData([]);

    const url = "http://127.0.0.1:8000/twitter/api/v1/get-trending-hashtag/";

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to fetch trending hashtags. HTTP status " + response.status
          );
        }
        return response.json();
      })
      .then((result) => {
        setLoading(false);
        setData(result.data || []);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <h1>Trending Hashtags</h1>
      <button onClick={fetchData}>Fetch Trending Hashtags</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Type</th>
              <th>Trending</th>
              <th>Posts</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.type}</td>
                <td>{item.trending}</td>
                <td>{item.posts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No trending hashtags available</p>
      )}
    </div>
  );
};

export default TrendingHashtag;
