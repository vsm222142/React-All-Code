import React from "react";

function Blog() {
  // Static Blog Details
  var title = "10 Tips for Effective Time Management";
  var author = "John Doe";
  var description =
    "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";

  // Inline Styles
  const containerStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    width: "420px",
    margin: "20px auto",
    backgroundColor: "#f4f4f4",
  };

  const titleStyle = {
    color: "#2c3e50",
    fontSize: "22px",
  };

  const authorStyle = {
    color: "#555",
    fontStyle: "italic",
  };

  const descriptionStyle = {
    fontSize: "14px",
    marginTop: "10px",
  };

  return (
    <>
      <div style={containerStyle} className="blog-container">
        {/* <img src={} alt="Author" className="blog-image" /> */}
         <img src="/Authors1.jpg" alt="Author" className="blog-image" />

        <h2 style={titleStyle}>{title}</h2>
        <p style={authorStyle}>By {author}</p>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </>
  );
}
export default Blog;
