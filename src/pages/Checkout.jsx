import { useSelector } from "react-redux";
import { SectionTitle, CheckoutForm, CartTotals } from "../components";

function Checkout() {
    const cartTotal = useSelector((state) => state.cartState.cartTotal);
    if (cartTotal === 0) {
        return <SectionTitle text="Your cart is empty" />;
    }
    return (
        <>
            <SectionTitle text="place your order" />
            <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
                <CheckoutForm />
                <CartTotals />
            </div>
        </>
    );
}

export default Checkout;
