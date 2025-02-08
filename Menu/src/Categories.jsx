function Categories({ categories }) {
	return (
		<div className="btn-container">
			{categories.map((category) => {
				return (
					<button key={category} type="button" className="btn">
						{category}
					</button>
				);
			})}
		</div>
	);
}

export default Categories;
