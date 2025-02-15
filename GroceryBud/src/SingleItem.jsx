import { useState } from "react";

function SingleItem({ item, removeItem }) {
    const [isChecked, setIsChecked] = useState(item.completed);
    return (
        <div className="single-item">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <p
                style={{
                    textTransform: "capitalize",
                    textDecoration: isChecked && "line-through",
                }}
            >
                {item.name}
            </p>
            <button
                className="btn remove-btn"
                type="button"
                onClick={() => removeItem(item.id)}
            >
                delete
            </button>
        </div>
    );
}

export default SingleItem;
