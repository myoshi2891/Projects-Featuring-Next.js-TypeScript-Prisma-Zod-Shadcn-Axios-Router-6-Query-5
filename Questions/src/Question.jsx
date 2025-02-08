import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question({ id: questionId, title, info, activeId, toggleQuestion }) {
	const isActive = questionId === activeId;

	return (
		<article className="question">
			<header>
				<h5>{title}</h5>
				<button
					className="question-btn"
					onClick={() => toggleQuestion(questionId)}
				>
					{isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{isActive && <p>{info}</p>}
		</article>
	);
}
export default Question;
