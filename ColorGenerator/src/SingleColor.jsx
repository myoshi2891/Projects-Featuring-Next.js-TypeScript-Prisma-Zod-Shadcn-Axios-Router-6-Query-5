import { toast } from "react-toastify";

function SingleColor({ index, color }) {
    const { hex, weight } = color;
    const saveToClipboard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success(`#${hex} copied to clipboard`);
            } catch (error) {
                toast.error("Failed to copy to clipboard");
            }
        } else {
            toast.error(
                "Oops! Your browser doesn't support clipboard functionality."
            );
        }
    };
    return (
        <article
            className={index > 10 ? "color color-light" : "color"}
            style={{ background: `#${hex}` }}
            onClick={saveToClipboard}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
        </article>
    );
}

export default SingleColor;
