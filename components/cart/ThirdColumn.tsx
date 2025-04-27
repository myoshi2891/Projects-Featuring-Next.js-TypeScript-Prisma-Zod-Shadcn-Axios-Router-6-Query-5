"use client";

import { useState } from "react";
import SelectProductAmount from "../single-product/SelectProductAmount";
import { Mode } from "../single-product/SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";
// import { useToast } from "../ui/use-toast";
import { useToast } from "../../hooks/use-toast";
import { LargeNumberLike } from "crypto";

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
	const [amount, setAmount] = useState(quantity);
	const handleAmountChange = async (value: number) => {
		setAmount(value);
	};
	const toast = useToast();

	return (
		<div className="md:ml-8">
			<SelectProductAmount
				amount={amount}
				setAmount={handleAmountChange}
				mode={Mode.CartItem}
				isLoading={false}
			/>
			<FormContainer action={removeCartItemAction}>
				<input type="hidden" value={id} name="id" />
				<SubmitButton size="sm" text="remove" className="mt-4" />
			</FormContainer>
		</div>
	);
}

export default ThirdColumn;
