export const GET_MERCHANTS = "GET_MERCHANTS";
export const SET_MERCHANTS = "SET_MERCHANTS";

export const getMerchants = (userAddress) => ({
    type: GET_MERCHANTS,
    userAddress,
})

export const setMerchants = (merchants) => ({
    type: SET_MERCHANTS,
    merchants
})