import { useState } from "react";
import menu from "./data";
import Menu from "./Menu";
import Title from "./Title";
import Categories from "./Categories";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ["all", ...tempSet];

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
const App = () => {
	const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
		if (category === "all") {
			return setMenuItems(menu);
		}
		const newItems = menu.filter((item) => item.category === category);
		setMenuItems(newItems);
  };

  return (
		<main>
			<section className="menu">
				<Title text="our menu" />
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
  );
};
export default App;
