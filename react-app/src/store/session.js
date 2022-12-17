// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const LOAD_USERS = "session/loadAllUsers";
const LOAD_RECEIVER = "session/loadRecervier";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const loadUsers = (users) => {
  return {
    type: LOAD_USERS,
    users,
  };
};

const loadReceiver = (user) => {
  return {
    type: LOAD_RECEIVER,
    user,
  };
};

const removeUser = () => ({
  type: REMOVE_USER,
});

const initialState = { user: null, users: [], receiver: null };

export const getUser = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}`);

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
};

export const getReceiver = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}`);

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(loadReceiver(data));
  }
};

export const getAllUser = () => async (dispatch) => {
  const response = await fetch("/api/users/");

  if (response.ok) {
    const data = await response.json();
    dispatch(loadUsers(data.users));
  }
};

export const authenticate = () => async (dispatch) => {
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  // console.log("***************** USER LOGIN", response);

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};

export const signUp = (username, email, password) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case LOAD_USERS:
      return { ...state, users: action.users };
    case REMOVE_USER:
      return { user: null };
    case LOAD_RECEIVER:
      return { ...state, receiver: action.user };
    default:
      return state;
  }
}
