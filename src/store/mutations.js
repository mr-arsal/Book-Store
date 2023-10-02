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

    localStorage.setItem('token', token);

}

// Login User Id

export const USER_ID = (state, userId) => {
    state.userId = userId;

    localStorage.setItem('userId', userId);

}

// Add Books to cart

export const ADD_TO_CART = (state, { bookid, quantity, bookprice }) => {
    state.cart.push({
        bookid,
        quantity,
        bookprice
    });
}


// Cart Books

export const CART_BOOKS = (state, cartBook) => {
    state.cartBook = cartBook;
}