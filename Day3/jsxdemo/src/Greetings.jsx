
function Greetings() {

    const d = new Date();
    const hour = d.getHours();

    console.log(hour);
    let msg="";
    
    if (hour >= 4 && hour < 12) {
     msg="Good Morning";
    }else if(hour>=12 && hour<16){
        msg="Good Afternoon";
    }else if(hour>=16 && hour<19){
        msg="Good Evening"
    }else{
        msg="Good Night"
    }
    return (<>
        <h1>I am Greetings Components .</h1>
  <mark> Hello, {msg}</mark>
    </>
    )
}

export default Greetings;