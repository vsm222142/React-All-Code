import { useState } from "react";


export default function Movie() {

    const [query, setQuery] = useState("");
    const [year,setYear] = useState("");
    const [movies, setMovies] = useState([]);

    const [page,setPage]=useState(1);
    const [totalResults,setTotalResults]=useState(0)
    const apikey = '9165b550';
    async function fetchmovies(pageNumber=1) {
        let response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${query}&y=${year}&page=${pageNumber}`);
        const data = await response.json();
        console.log(data);

        if (data.Response === "True") {
            setMovies(data.Search);
            setTotalResults(data.totalResults);
        } else {
            setMovies([]);
            alert(data.Error);
        }

    }

    const handleKey = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setPage(1)
            fetchmovies(1);
        }
    }



    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    const years = [];
    for (let y = currentYear; y >= 1980; y--) {
        years.push(y);
    }
    // console.log(years);

    const handleYearChange=(e) => {
        const selectedYear = e.target.value;
        setYear(selectedYear);
        console.log(year)
             setPage(1);
        fetchmovies(1);
    }

     const handlePrev=()=>{
        if(page>1){
            const newPage=page-1;
            setPage(newPage);
            fetchmovies(newPage)
        }
     }

     const handleNext= ()=>{
        const maxPage=Math.ceil(totalResults/10);
        if(page<maxPage)
        {
            const newPage=page+1;
            setPage(newPage);
            fetchmovies(newPage);
        }
     }

    return (
        <>

            <div style={{ maxWidth: "800px", margin: "20px auto" }}>
                <h1 style={{ textAlign: "center" }}> Movie Search</h1>
                <div>
                    <input type="text" style={{ width: "80%", padding: "8px", marginRight: "5px" }} value={query}
                        onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKey} />

                    <select style={{ padding: "8px" }} value={year} onChange={handleYearChange}>
                        <option value="" style={{ backgroundColor: "brown" }} >Select Years</option>
                        {
                            years.map((i) => (
                                <option style={{ backgroundColor: "brown" }} value={i} key={i}>{i}</option>
                            ))
                        }
                    </select>
                </div>

            </div>


            <div style={{ maxWidth: "650px", margin: "10px auto" }}>

                {/* Movie List */}
                { 
                    
                    movies.map((m) => (
                        <div key={m.imdbID} style={{ display: "flex", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
                            <div style={{ marginRight: "10px" }}>
                                <img src={m.Poster} alt={m.Title} style={{ width: "100px", height: "150px", objectFit: "cover" }} />
                            </div>
                            <div>
                                <h3>{m.Title}</h3>
                                <p><strong>Year: </strong></p>
                                <p><strong>Type: </strong></p>
                            </div>
                        </div>


                    ))

                }
                {/* Pagination part */}

                <div style={{textAlign:"center",marginTop:"20px"}}>
                    <button style={{padding:"5px 10px",marginRight:"10px"}} onClick={handlePrev} disabled={page===1}>Pevious</button>
                    <span>Page {page} of {Math.ceil(totalResults/10)} </span>
                    <button style={{padding:"5px",marginLeft:"10px"}} onClick={handleNext} disabled={page===Math.ceil(totalResults/10)}>Next</button>

                </div>
            </div>
        </>
    )
}