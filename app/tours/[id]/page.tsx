function page({ params }: { params: { id: string } }) {
	return (
		<div>
			<h1 className="text-4xl">ID : {params.id}</h1>
		</div>
	);
}

export default page;
