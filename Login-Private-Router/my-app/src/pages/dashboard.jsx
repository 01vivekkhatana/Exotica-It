import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Dashboard = () => {
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

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
      if (response.ok) {
        console.log("Content saved successfully");
      } else {
        console.error("Failed to save content");
      }
    } catch (error) {
      console.error("Error saving content:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <Editor
        apiKey="besl4a52do5fa689bp3inh8o9gro7loztp5wzctkcxhkzz7p"
        value={content}
        init={{
          height: 500,
          menubar: "file edit view insert format tools table help",
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | removeformat | " +
            "link image | code preview | ltr rtl",
          content_style: `
            body { 
              font-family:Helvetica,Arial,sans-serif; 
              font-size:14px; 
              direction: ltr; /* Ensure content is LTR */
              text-align: left; /* Ensure text alignment is left */
            }
          `,
          directionality: "ltr",
        }}
        onEditorChange={handleEditorChange}
      />
      <button onClick={handleSave}>Save Content</button>
      <div>
        <h2>Editor Content</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Dashboard;
