"use client";

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className="flex flex-col items-center w-[100px]">
            <p className="text-5xl font-bold">Count: {count}</p>
            <button
                onClick={increment}
                className="bg-blue-500 rounded text-white px-4 py-2 mt-4"
            >
                Increment
            </button>
        </div>
    );
    return <div>Counter</div>;
}

export default Counter;
