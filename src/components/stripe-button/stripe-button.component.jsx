import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JfoOHLZrKJPrb6PfIlfRLYwFjVKHvQv4aJZBSKtwDrsi3U8j6J83bwcIY9NV9C3iGJ8v4YANuqkHN5cOVVeqqDU00A1uSERFn"

    const onToken = token => {
        console.log(token);
        alert("Payment was successful!");
    }

    return(
        <StripeCheckout label="Pay Now" name="Epic Clothing Store" billingAddress shippingAddress image={"https://svgshare.com/i/CUz.svg"} description={`Your total is $${price}`} amount={priceForStripe} panelLabel={"Pay Now"} token={onToken} stripeKey={publishableKey}/>
    )

}

export default StripeCheckoutButton;