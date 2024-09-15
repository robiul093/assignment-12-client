import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = () => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transectionId, setTransectionId] = useState('');
    const [date, setDate] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const date = new Date();

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, '0');

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        // Get timezone offset in minutes and convert to hours
        const timeZoneOffset = -date.getTimezoneOffset();
        const offsetHours = String(Math.floor(Math.abs(timeZoneOffset) / 60)).padStart(2, '0');
        const offsetMinutes = String(Math.abs(timeZoneOffset) % 60).padStart(2, '0');
        const gmtOffset = `GMT${timeZoneOffset >= 0 ? '+' : '-'}${offsetHours}:${offsetMinutes}`;

        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} (${gmtOffset})`;

        console.log(formattedDate);
        setDate(formattedDate);


    }, [])


    useEffect(() => {
        fetch("https://assignment-12-server-lemon-delta.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: 10 })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.clientSecret);
                setClientSecret(data.clientSecret)

            })
            .catch(error => {
                console.log('Error fetching payment intent:', error);

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

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName,
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log('transection id', paymentIntent?.id)
                setTransectionId(paymentIntent?.id)

                // pro user
                const proUser = {
                    name: user?.displayName,
                    email: user?.email,
                    transection_Id: transectionId,
                    date: date,
                };

                const updateData = {
                    role: 'proUser'
                }

                fetch('https://assignment-12-server-lemon-delta.vercel.app/proUserInfo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(proUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            fetch(`https://assignment-12-server-lemon-delta.vercel.app/userRole/${user?.email}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(updateData)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Now you are a proUser",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                })
                        }
                    })
            }
            else {
                setTransectionId('')
            }
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
                <button className="btn w-[80px] bg-green-400 my-7" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {transectionId && <p className="text-green-600">your transection id is : <span className="bg-gray-400 text-green-800">{transectionId}</span></p>}
            </form>
        </div>
    );
};

export default CheckoutForm;