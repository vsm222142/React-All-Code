

 const contacts=[
        {
            name:"Neha",
            email:"n@gmail.com",
            mobile:"2343574243",
            city:"mumbai",
            dob:"2002-01-01"
        },
           {
            name:"Pratik",
            email:"p@gmail.com",
            mobile:"2343574353",  
            city:"Pune",
            dob:"2005-02-24"
        },
           {
            name:"Akash",
            email:"a@gmail.com",
            mobile:"2343576545",
            city:"Delhi",
            dob:"2005-04-05"
        }
    ]

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const todayDate = new Date();
        const age=todayDate.getFullYear() - birthDate.getFullYear();
        return age;
    }
 const Card=({name,email,mobile,city,dob})=> {

   
    return (
        <>
            <div className="contact-card">
                <h1>Contact Page</h1>
                <h2>{name}</h2>
                <p><strong>Email: </strong>{email}</p>
                <p><strong>Mobile: </strong>{mobile}</p>
                <p><strong>City: </strong>{city}</p>
                <p><strong>DOB: </strong>{dob}</p>
                <p><strong>Age: </strong>{calculateAge(dob)}</p>
            </div>
        </>
    )
}




export default function Contact( ) {


    return (
        <>
            <div className="app-container">
                <h1>Contact Page</h1>
                <div className="contacts">
                    {
                   contacts.map((x,index)=>(
                    <Card key={index} name={x.name} email={x.email} mobile={x.mobile} city={x.city} dob={x.dob}> </Card>
                   ))
                    }
        
                </div>
            </div>
        </>
    )
}