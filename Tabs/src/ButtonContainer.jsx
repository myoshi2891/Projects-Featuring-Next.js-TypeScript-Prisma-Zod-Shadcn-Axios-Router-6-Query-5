function ButtonContainer({ jobs }) {
	return (
		<div className="btn-container">
			{jobs.map((item) => {
				return (
					<button key={item.id} className="job-btn">
						{item.company}
					</button>
				);
			})}
		</div>
	);
}

export default ButtonContainer;
