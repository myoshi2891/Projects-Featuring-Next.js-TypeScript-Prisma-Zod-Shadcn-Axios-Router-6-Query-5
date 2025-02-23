import { useGlobalContext } from "./Context";
import sublinks from "./data";

function Submenu() {
	const { pageId } = useGlobalContext();
	const currentPage = sublinks.find((item) => item.pageId === pageId);
	console.log(currentPage);

	return (
		<div className="submenu">
			<h5>{currentPage?.page}</h5>
			<div
				className="submenu-links"
				style={{
					gridTemplateColumns:
						currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
				}}
			>
				{currentPage?.links?.map((link) => {
					const { label, icon, url, id } = link;
					return (
						<a href={url} key={id}>
							{icon}
							{label}
						</a>
					);
				})}
			</div>
		</div>
	);
}

export default Submenu;
