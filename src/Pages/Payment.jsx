import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51Pwj96P2QT7Ek8pUHSCkMJUGNS6uif3Jd5i3woWrbCtOVw3FWuXASTMu6tMKI5QARaDfTefjuDhAPesy6z4ddjB700oYse7BLY')

const Payment = () => {
    return (
        <div>
            
            <div className="text-center space-y-3 my-10">
                <h2 className="text-4xl font-bold">You want to become a pro user?</h2>
                <p className="text-2xl font-medium flex items-center text-center gap-2 justify-center">Spend only <span className="text-5xl font-bold text-yellow-500 ">10</span> $ </p>
            </div>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;