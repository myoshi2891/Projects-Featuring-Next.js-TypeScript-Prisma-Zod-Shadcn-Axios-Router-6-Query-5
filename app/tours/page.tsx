import Image from "next/image";
import Link from "next/link";

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
	const data = await fetchTours();

	return (
		<section>
			<h1 className="text-3xl mb-4">Tours</h1>
			<div className="grid md:grid-cols-2 gap-8">
				{data.map((tour: Tour) => {
					return (
						<Link key={tour.id} href={`/tours/${tour.id}`}>
							<div className="relative h-48 mb-2">
								<Image
									src={tour.image}
									alt={tour.name}
									fill
									sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
									priority
									className="rounded object-cover"
								/>
							</div>

							<h2 className="text-2xl hover:text-blue-500 font-bold">
								{tour.name}
							</h2>
							<p className="text-gray-600">{tour.info}</p>
							<div className="relative">
								<Image
									className="object-cover rounded"
									src={tour.image}
									alt={tour.name}
									fill
									priority
									sizes="100vw"
								/>
								<div className="mt-4">
									<span className="text-xl font-bold">
										$ {tour.price}
									</span>
									<button className="ml-4 bg-blue-500 rounded text-white px-4 py-2">
										Book Now
									</button>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</section>
	);
}

export default ToursPage;
