import { useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Carousel() {
	const [people, setPeople] = useState(list);
	const prevSlide = () => {};
	const nextSlide = () => {};

	return (
		<section className="slider-container">
			{people.map((person, personIndex) => {
				const { id, image, name, title, quote } = person;
				return (
					<article
						className="slide"
						style={{
							transform: `translateX(${100 * personIndex}%)`,
						}}
						key={id}
					>
						<img src={image} alt={name} className="person-img" />
						<h5 className="name">{name}</h5>
						<p className="title">{title}</p>
						<p className="text">{quote}</p>
						<FaQuoteRight className="icon" />
					</article>
				);
			})}
			<button type="button" className="prev" onClick={prevSlide}>
				<FiChevronLeft />
			</button>
			<button type="button" className="next" onClick={nextSlide}>
				<FiChevronRight />
			</button>
		</section>
	);
}

export default Carousel;
