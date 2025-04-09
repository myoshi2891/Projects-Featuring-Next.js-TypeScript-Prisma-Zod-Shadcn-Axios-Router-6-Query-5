import mapsImg from "@/images/maps.jpg";
import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

function page({ params }: { params: { id: string } }) {
	return (
		<div>
			<h1 className="text-4xl">ID : {params.id}</h1>
			<section className="flex gap-x-4 mt-4">
				{/* local image */}
				<div>
					<Image
						src={mapsImg}
						alt="maps"
						priority
						className="w-48 h-48 object-cover rounded"
						width={192}
						height={192}
					/>
					<h2 className="text-3xl">Tour Details</h2>
					{/* <p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed quis malesuada neque, at posuere justo. Sed vel
						libero vel felis ullamcorper vulputate. Sed vel libero
						vel felis ullamcorper vulputate. Sed vel libero vel
						felis ullamcorper vulputate.
					</p> */}
				</div>
				{/* remote image */}
				<div>
					<h2 className="text-3xl">Remote Image</h2>
					<Image
						src={url}
						alt="tour"
						priority
						className="w-48 h-48 object-cover rounded"
						width={192}
						height={192}
					/>
				</div>
			</section>
		</div>
	);
}

export default page;
