import { useEffect, useState } from "react"


export default function Counter() {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `তুমি ${count} বার click করছো`;
    }, [count]);

    return (
        <div>
        <h6> Clicked: {count} </h6>
        <button onClick={() => setCount(count + 1)}> + </button>
        </div>
    );
}