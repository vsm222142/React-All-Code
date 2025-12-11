
const Books = (props)=>{
return (
    <>
    <h1>I am Books Component</h1>
    {/* <h2>I am {props.title} Book</h2>
    <p > {props.title} author is {props.author}</p>
    <p>{props.title} Price is {props.price} </p> */}

    <p> {props.bookinfo.title} author is {props.bookinfo.author} </p>
     <p> {props.bookinfo.title} author is {props.bookinfo.Price} </p>

     <h4> {props.bookinfo.title} Publisher Name </h4>

      {/* <h4> {props.publisher[0]} Publisher Name </h4> */}

     <ol>
        {props.publisher.map((e)=>(<li>{e}</li>))}
     </ol>

    </>
)

}

export default Books;