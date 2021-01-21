import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button, Grid, Icon } from "@material-ui/core";
import "date-fns";

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";


import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createConnectedAccount } from "app/redux/actions/MerchantPayment/action";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51H3PrGBvbUyFspEhrLbdt8uzWWgeb3g64KMeCamoMHwmBwHSvZ7zmlEiXacafGZb9LOQUDtXWoQdtimoEqxp3DwA00356y5HB1');

class ConnectedAccount extends Component {

    state = {
        address: "",
        companyName: "",
    };


    handleSubmit = async () => {

        const { stripe } = this.props;


        console.log('state : ', this.state);

        let accountResult = await stripe.createToken('account', {
            business_type: 'company',
            company: {
                name: this.state.companyName,
                address: {
                    line1: this.state.address
                }
            },
            tos_shown_and_accepted: true,
        })


        if (!this.state.address || !this.state.companyName) {
            // display error
        }

        if (!accountResult || !accountResult.token || !accountResult.token.id) {
            // display error
        }

        this.props.createConnectedAccount(accountResult.token.id)

    };

    handleChange = event => {
        event.persist();
        this.setState({ [event.target.name]: event.target.value });
    };


    handleDateChange = date => {
        console.log(date);

        this.setState({ date });
    };

    render() {
        let {
            address,
            companyName,
        } = this.state;


        return (
            <div>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => null}
                >
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                className="mb-16 w-100"
                                label="address"
                                onChange={this.handleChange}
                                type="text"
                                name="address"
                                value={address}
                                errorMessages={["this field is required"]}
                            />
                            <TextValidator
                                className="mb-16 w-100"
                                label="companyName"
                                onChange={this.handleChange}
                                type="text"
                                name="companyName"
                                value={companyName}
                                errorMessages={["this field is required"]}
                            />
                        </Grid>
                    </Grid>
                    <Button color="primary" variant="contained" type="submit">
                        <Icon>send</Icon>
                        <span className="pl-8 capitalize">Send</span>
                    </Button>
                </ValidatorForm>
            </div>
        );
    }
}

const InjectedCheckoutForm = (props) => {

    return (
        <ElementsConsumer>
            {({ elements, stripe }) => (
                <ConnectedAccount elements={elements} createConnectedAccount={props.createConnectedAccount} stripe={stripe} />
            )}
        </ElementsConsumer>
    )
}

const App = (props) => {

    return (
        <Elements stripe={stripePromise}>
            <InjectedCheckoutForm createConnectedAccount={props.createConnectedAccount} />
        </Elements>
    );
};

const mapStateToProps = state => ({

});
export default withRouter(
    connect(
        mapStateToProps,
        { createConnectedAccount }
    )(App)
);




import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button, Grid, Icon } from "@material-ui/core";
import "date-fns";

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";

import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { bankAccountRegistration } from "app/redux/actions/MerchantPayment/action";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51H3PrGBvbUyFspEhrLbdt8uzWWgeb3g64KMeCamoMHwmBwHSvZ7zmlEiXacafGZb9LOQUDtXWoQdtimoEqxp3DwA00356y5HB1');

class SaveIban extends Component {

    state = {
        accountHolderName: "",
        iban: ""
    }

    handleSubmit = async () => {

        const { stripe } = this.props;

        if (!this.state.holderName || !this.state.iban) {
            // Display error
        }

        let data = {
            country: 'FR',
            currency: 'eur',
            account_number: this.state.iban,
            account_holder_name: this.state.accountHolderName,
            account_holder_type: 'company',
        }

        let result = await stripe.createToken('bank_account', data);
        console.log('result: ', result.token.id);

        this.props.bankAccountRegistration("acct_1HoyOSQojDynB0LG", result.token.id)
    }

    handleChange = event => {
        event.persist();
        this.setState({ [event.target.name]: event.target.value });
    };


    render() {
        return (
            <div>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => null}
                >
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                className="mb-16 w-100"
                                label="Titulaire du compte"
                                onChange={this.handleChange}
                                type="text"
                                name="accountHolderName"
                                errorMessages={["Ce champs est requis"]}
                            />
                            <TextValidator
                                className="mb-16 w-100"
                                label="IBAN"
                                onChange={this.handleChange}
                                type="text"
                                name="iban"
                                errorMessages={["Ce champs est requis"]}
                            />
                        </Grid>
                    </Grid>
                    <Button color="primary" variant="contained" type="submit">
                        <Icon>send</Icon>
                        <span className="pl-8 capitalize">Send</span>
                    </Button>
                </ValidatorForm>
            </div>

        )
    }
}

const InjectedCheckoutForm = (props) => {

    return (
        <ElementsConsumer>
            {({ elements, stripe }) => (
                <SaveIban elements={elements} bankAccountRegistration={props.bankAccountRegistration} stripe={stripe}/>
            )}
        </ElementsConsumer>
    )
}

const App = (props) => {

    return (
        <Elements stripe={stripePromise}>
            <InjectedCheckoutForm bankAccountRegistration={props.bankAccountRegistration} />
        </Elements>
    );
};


const mapStateToProps = state => ({
});
export default withRouter(
    connect(
        mapStateToProps,
        { bankAccountRegistration }
    )(App)
);
