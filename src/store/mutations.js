// Get All Books

export const GET_BOOKS = (state, books) => {
    state.books = books;
}

// Get Book Details
export const BOOK_DETAILS = (state, bookDetails) => {
    state.bookDetails = bookDetails;
}

// User Registration
export const SET_USER = (state, user) => {
    state.user = user;
}

// User Login

export const USER_LOGIN = (state, login) => {
    state.login = login;
}

// User Token

export const USER_TOKEN = (state, token) => {
    state.token = token;

    // Update local storage with the token
    localStorage.setItem('token', token);
  
}