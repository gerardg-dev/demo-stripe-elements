import React, { Component } from "react";
import { connect } from "react-redux";

import demosURLs from "../../../../../../../appURLs/app_demos";
import projectKeys from "../../../../../../../keys/app_starter";

import { createSubscription } from "../../../../../../../thunks/app_starter/Firebase/Stripe";

import StripeElements from "../../../../../../../components/wedevlopUI/StripeElementsV2";

import Heading from "../ui/Heading";
import Subheading from "../ui/Subheading";
import Body from "../ui/Body";
import SeeCodeButton from "../ui/SeeCodeButton";
import ExternalComponent from "../ui/ExternalComponent";
import Modal from "../ui/Modal";
import Auth from "../ui/Auth";
import Loading from "../ui/Loading";

import cssStyles from "../styles/css/default.css";
import cssModules from "../styles/css_modules/default.css";
import sassStyles from "../styles/sass/default.sass";
import scssStyles from "../styles/scss/default.scss";
import stylable from "../styles/stylable/default.st.css";
import styleObjects from "../styles/style_objects/index.js";
import styledComponents from "../styles/styled_components/index.js";

class CreateSubscription extends Component {
  componentDidMount() {
    if (this.props.authUser === null) {
      this.props.history.push(demosURLs.firebase.auth.home);
    }
  }

  render() {
    return (
      <div style={styleObjects.container}>
        <div style={styleObjects.examplesContainer}>
          <h1 style={styleObjects.demo}>
            <strong>DEMO</strong>
          </h1>
          <Heading text="STRIPE ELEMENTS - OPERATIONS" />
          <Subheading text="CREATE SUBSCRIPTION" />
          <Body text="Preview" />
          <StripeElements
            publishableKey={projectKeys.stripe.publishableKey}
            stripeOperation="createSubscription"
            pricingID={
              projectKeys.stripe.products.goldPlan.pricing_plans.yearly
            }
            subscriptionFun={this.props.createSubscription}
            onCreateSubscriptionSuccessHandler={() => {
              if (this.props.stripeError === null) {
                alert("DEMO: Subscription Created!");
              }
            }}
            formN={5}
            submitButtonStyleN={1}
            showInputLabel={false}
          />
          <SeeCodeButton href="https://carbon.now.sh/oOAVHcSTdDj9UCkneVrR" />
          <a
            style={{ ...styleObjects.button, ...{ marginTop: "20px" } }}
            href="https://stripe.com/docs/testing#cards"
            target="_blank"
          >
            {"SEE TEST CARD NUMBERS"}
          </a>
        </div>
        {this.props.stripeLoader === true && <Loading />}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, stripe }) => {
  return {
    authUser: auth.authUser,
    firebaseUser: auth.firebaseUser,
    userDoc: auth.userDoc,
    stripeCustomer: stripe.stripeCustomer,
    stripeLoader: stripe.stripeLoader,
    stripeError: stripe.stripeError
  };
};

export default connect(mapStateToProps, { createSubscription })(
  CreateSubscription
);

CreateSubscription.defaultProps = {
  subscriptionFun: () => console.log("CreateSubscription - subscriptionFun()")
};
