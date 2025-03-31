import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe("your-stripe-public-key-here");

const CheckoutForm = ({ eventId, price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();
    const { token } = await stripe.createToken(elements.getElement(CardElement));

    try {
      await axios.post("/api/payments", { token: token.id, eventId, amount: price });
      alert("Payment successful!");
    } catch (error) {
      console.error("Payment failed", error.response.data);
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay Now</button>
    </form>
  );
};

const PaymentGateway = ({ eventId, price }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm eventId={eventId} price={price} />
    </Elements>
  );
};

export default PaymentGateway;
