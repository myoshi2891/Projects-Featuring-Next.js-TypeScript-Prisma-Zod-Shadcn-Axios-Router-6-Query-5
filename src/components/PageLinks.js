import { pageLinks } from "../data";

function PageLinks({ parentClass, itemClass }) {
	return (
		<ul className={parentClass} id="nav-links">
			{pageLinks.map((link) => {
				return (<PageLinks key={link.id} link={link} itemClass={itemClass}/>
				);
			})}
		</ul>
	);
}

export default PageLinks;