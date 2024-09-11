import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const CheckoutForm = () => {

    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch("/create-payment-intent",{
            method: "POST",
            headers: {
                "Contene-Type" : "application/json"
            },
            body: JSON.stringify({price : 200})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.clientSecret);
            
        })
    }, [])


    const handelSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });


        if (error) {
            console.log('payment error', error);
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError('')
        }



    }

    return (
        <div className="w-[600px] mx-auto">
            <form onSubmit={handelSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn w-[80px] bg-green-400 my-7" type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;