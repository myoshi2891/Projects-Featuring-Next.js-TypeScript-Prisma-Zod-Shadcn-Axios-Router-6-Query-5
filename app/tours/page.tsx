const url = "https://www.course-api.com/react-tours-project";

type Tour = {
	id: string;
	name: string;
	info: string;
	image: string;
	price: string;
};

const fetchTours = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	const response = await fetch(url);
	const data: Tour[] = await response.json();
	return data;
};
async function ToursPage() {
	const data = await fetchTours()

	return (
		<section>
			<h1 className="text-3xl mb-4">Tours</h1>
			{data.map((tour: Tour) => (
				<div key={tour.id} className="p-4 bg-white rounded shadow-md">
					<img
						src={tour.image}
						alt={tour.name}
						className="w-full h-64 object-cover"
					/>
					<h2 className="text-2xl font-bold">{tour.name}</h2>
					<p className="text-gray-600">{tour.info}</p>
					<div className="mt-4">
						<span className="text-xl font-bold">
							$ {tour.price}
						</span>
						<button className="ml-4 bg-blue-500 rounded text-white px-4 py-2">
							Book Now
						</button>
					</div>
				</div>
			))}
		</section>
	);
}

export default ToursPage;
