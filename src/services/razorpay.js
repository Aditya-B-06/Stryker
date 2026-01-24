export const openRazorpayCheckout = (amount) => {
    const options = {
        key: "rzp_test_S7lDGuHqjqQ2iN",
        amount: amount * 100,
        currency: "USD",
        name: "Stryker",
        description: "Checkout",
        theme: {
            color: "#2563eb",
        },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
};
