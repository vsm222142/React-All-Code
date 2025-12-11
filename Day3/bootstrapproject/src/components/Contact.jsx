

const contacts = [
    { name: "Rohan", email: "r@gmail.com", mobile: 8908564220, dob: "2000-03-21", photo: "https://picsum.photos/201" },
    { name: "Alok", email: "a@gmail.com", mobile: 8908864220, dob: "2004-03-21", photo: "https://picsum.photos/202" },
    { name: "Rakesh", email: "r@gmail.com", mobile: 8908564220, dob: "2005-03-21", photo: "https://picsum.photos/203" }

]

const Contact = () => {
    return (
    <>
        <div className="container">
            <div className="row">
                {
                    contacts.map((e) => {
                        return (
                          <div className="col-md-4 mt-2">
                            <div className="card">
                                <img src={e.photo} className="card-img-top" alt="..." width={"150px"} height={"200px"} />
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className="card-text">{e.email}.</p>
                                     <p className="card-text">{e.mobile}.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                               </div>
                        )

                    })
                }
            </div>
        </div>


    </>
    )
}

export default Contact;