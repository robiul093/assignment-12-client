import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51Pwj96P2QT7Ek8pUHSCkMJUGNS6uif3Jd5i3woWrbCtOVw3FWuXASTMu6tMKI5QARaDfTefjuDhAPesy6z4ddjB700oYse7BLY')

const Payment = () => {
    return (
        <div>
            <h2>Payment Page:</h2>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;