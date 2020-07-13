import cssCard3 from "./card3.css";
import registerElements from "./registerElements";

const STRIPE_PUBLISHABLE_KEY = "pk_test_6JBrVUQpLo1aLaf8WwfjhZju00UY0rxd5b";
var stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
var elements = stripe.elements();

const card3 = () => {
  // document.addEventListener("DOMContentLoaded", function() {});

  // 'use strict';

  var elements = stripe.elements({
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css?family=Quicksand"
      }
    ],
    // Stripe's examples are localized to specific languages, but if
    // you wish to have Elements automatically detect your user's locale,
    // use `locale: 'auto'` instead.
    locale: window.__exampleLocale
  });

  var elementStyles = {
    base: {
      color: "#fff",
      fontWeight: 600,
      fontFamily: "Quicksand, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",

      ":focus": {
        color: "#424770"
      },

      "::placeholder": {
        color: "#9BACC8"
      },

      ":focus::placeholder": {
        color: "#CFD7DF"
      }
    },
    invalid: {
      color: "#fff",
      ":focus": {
        color: "#FA755A"
      },
      "::placeholder": {
        color: "#FFCCA5"
      }
    }
  };

  var elementClasses = {
    focus: "focus",
    empty: "empty",
    invalid: "invalid"
  };

  var cardNumber = elements.create("cardNumber", {
    style: elementStyles,
    classes: elementClasses
  });
  cardNumber.mount("#example3-card-number");

  var cardExpiry = elements.create("cardExpiry", {
    style: elementStyles,
    classes: elementClasses
  });
  cardExpiry.mount("#example3-card-expiry");

  var cardCvc = elements.create("cardCvc", {
    style: elementStyles,
    classes: elementClasses
  });
  cardCvc.mount("#example3-card-cvc");

  registerElements([cardNumber, cardExpiry, cardCvc], "example3");
};

export default card3;