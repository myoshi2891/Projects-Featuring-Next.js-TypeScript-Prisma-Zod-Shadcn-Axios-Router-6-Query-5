"use client";

import { useState } from "react";
import SelectProductAmount from "../single-product/SelectProductAmount";
import { Mode } from "../single-product/SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import {
	removeCartItemAction,
	updateCart,
	updateCartItemAction,
} from "@/utils/actions";
// import { useToast } from "../ui/use-toast";
import { useToast } from "../../hooks/use-toast";
import { LargeNumberLike } from "crypto";

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
	const [amount, setAmount] = useState(quantity);
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();
	const handleAmountChange = async (value: number) => {
		setIsLoading(true);
		toast({ description: `Calculating...` });
		const result = await updateCartItemAction({
			amount: value,
			cartItemId: id,
		});
		setAmount(value);
		toast({ description: result.message });
		setIsLoading(false);
	};

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
