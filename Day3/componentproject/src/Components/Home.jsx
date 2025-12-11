

export default function Home() {

  const title = "10 Tips for Effective Time Management ";

  const author = "John Doe";
  const description = "Today 's world famous book. ";


  const containerStyle = {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    textAlign: "center",
    margin: "20px auto",
    backgroundColor: "cyan"
  }

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px"
  }

  const authorStyle = {
    fontSize: "18px",
    fontStyle: "italic",
    marginBottom: "10px"
  }

  const descStyle = {
    fontSize: "16px",
    marginBottom: "10px"
  }

  return <>
    <h1>Home Page</h1>

    <div style={containerStyle}>

      <img src={'vite.svg'} alt="Imaga" style={{ width: "100%", borderRadius: "8px" }} className="blog-image" />
      <h2 style={titleStyle}>{title}</h2>
      <p style={authorStyle}>By {author}</p>
      <p style={descStyle}>{description}</p>
    </div>

  </>
} 