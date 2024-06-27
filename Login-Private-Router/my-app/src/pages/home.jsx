import React, { useState, useEffect } from "react";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/content");
      const data = await response.json();
      setContent(data.content);
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  return (
    <div>
      <h1>This is the home page</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Home;
