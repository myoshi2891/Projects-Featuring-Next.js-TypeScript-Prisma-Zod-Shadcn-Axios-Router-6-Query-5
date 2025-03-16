import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";
function SearchForm() {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<Wrapper>
			<Form className="form">
				<input
					type="search"
					name="search"
					className="form-input"
					defaultValue="vodka"
				/>
				<button type="submit" className="btn" disabled={isSubmitting}>
					{isSubmitting ? "searching" : "Search"}
				</button>
			</Form>
		</Wrapper>
	);
}

export default SearchForm;
