export const GET_MERCHANTS = "GET_MERCHANTS";
export const SET_MERCHANTS = "SET_MERCHANTS";

export const LOGIN = "LOGIN";
export const SET_USER = "SET_USER";

export const getMerchants = (userAddress) => ({
  type: GET_MERCHANTS,
  userAddress,
});

export const setMerchants = (merchants) => ({
  type: SET_MERCHANTS,
  merchants,
});

export const login = (user) => ({
  type: LOGIN,
  user
});

export const setUser = (user) => ({
    type: SET_USER,
    user
})
