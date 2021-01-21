import axios from "axios";
import ActionTypes from './actionsType'

export const createConnectedAccount = (token) => async dispatch => {

    dispatch({
        type: ActionTypes.LOADING
    })

    try {
        let response = await axios.post('/create-connected-account', { token });

        if (response && response.status !== 200) {

            return dispatch({
                type: ActionTypes.CREATE_ACCOUNT_REGISTER_ERROR,
                payload: {
                    status: response.data.status,
                    error: response.data.message,
                }
            });

        }

        return dispatch({
            type: ActionTypes.CREATE_ACCOUNT_REGISTER_SUCCESS,
            payload: {
                status: response.data.status,
                msg: response.data.message,
                data: response.data.data
            }
        });

    } catch (error) {

        console.log("createConnectedAccount method error : ", error);
        return dispatch({
            type: ActionTypes.CREATE_ACCOUNT_REGISTER_ERROR,
            payload: {
                status: 500,
                error: "Une erreur est survenue",
            }
        });
    }
};


export const bankAccountRegistration = (stripeAccountId, bankAccountToken) => async dispatch => {

    dispatch({
        type: ActionTypes.LOADING
    })

    try {
        let response = await axios.post('/bank-account-registration', { stripeAccountId, bankAccountToken });

        if (response && response.status !== 200) {

            return dispatch({
                type: ActionTypes.BANK_ACCOUNT_REGISTER_ERROR,
                payload: {
                    status: response.data.status,
                    error: response.data.message,
                }
            });
        }

        return dispatch({
            type: ActionTypes.BANK_ACCOUNT_REGISTER_SUCCESS,
            payload: {
                status: response.data.status,
                msg: response.data.message,
                data: response.data.data
            }
        });
    } catch (error) {

        console.log("bankAccountRegistration method error : ", error);
        return dispatch({
            type: ActionTypes.BANK_ACCOUNT_REGISTER_ERROR,
            payload: {
                status: 500,
                error: "Une erreur est survenue",
            }
        });
    }
};
