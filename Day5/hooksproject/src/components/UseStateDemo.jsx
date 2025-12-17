import { useState } from "react";

export default function UseStateDemo() {
  const [count, setCount] = useState(0);

  const handleCountevent = () => {
    const newCount = count + 1;
    setCount(newCount)
  }

  const [text,setText]=useState("");

  const [liked,setLiked]=useState(false);

  return (
    <>
    {/* useState */}
    {/* Example 1 */}
      <button onClick={() => setCount(count + 1)}>You press me {count} times</button>

      <button onClick={handleCountevent}>
        show
      </button>

      <p>Counter: {count}</p>

      {/* Example 2 */}

      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />

      <h3>You Typed : {text}</h3>

      <input type="checkbox" checked={liked} onChange={(e)=> setLiked(e.target.checked)} />
      <label> I liked this  </label>
      <br />
      <mark> You {liked ? 'Liked':'did not liked'} this</mark>
 

    </>
  )
}