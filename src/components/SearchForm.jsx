import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";
function SearchForm({ searchTerm }) {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<Wrapper>
			<Form className="form">
				<input
					type="search"
					name="search"
					className="form-input"
					defaultValue={searchTerm}
				/>
				<button type="submit" className="btn" disabled={isSubmitting}>
					{isSubmitting ? "searching" : "Search"}
				</button>
			</Form>
		</Wrapper>
	);
}

export default SearchForm;
