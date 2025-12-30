
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function fetchbooks() {
            const response = await fetch("http://localhost:5000/books");
            const data = await response.json()
            setBooks(data);
        }
        fetchbooks();
    }, [])

    return (
        <>
            <div className='container mt-2'>
                <div className='row'>
                    {
                        books.map((i) => (
                            <div key={i.id} className='col-md-3 mt-2'>
                                <div className='card'>
                                    <img src={i.photo} alt="i.title" className='card-img-top' width={"100px"} height={"150px"} />

                                    <h5 className='card-title'>{i.title}</h5>
                                    <p className='card-text'>{i.author}</p>
                                    <p className='card-text'>Price: {i.price}/- </p>
                                    <Link to="/login" className="btn btn-danger">Add to Card</Link>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>


    )
}
