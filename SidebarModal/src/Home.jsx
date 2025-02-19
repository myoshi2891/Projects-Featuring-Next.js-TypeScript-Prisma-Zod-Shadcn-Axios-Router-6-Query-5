import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
function Home() {
    const { openSidebar, openModal } = useGlobalContext();
    console.log(openSidebar);

    return (
        <main>
            <button onClick={openSidebar} className="sidebar-toggle">
                <FaBars />
            </button>
            <div onClick={openModal} className="button btn">
                show modal
            </div>
        </main>
    );
}

export default Home;
