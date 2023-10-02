import axios from "axios"

// Get All Books

export const allBooks = ({ commit }) => {
    axios.get('http://10.0.10.211:3300/api/showbooks')
        .then(response => {
            commit('GET_BOOKS', response.data)
        })
}

// Get Book Details

export const getBookDetails = ({ commit }, bookId) => {
    axios.get(`http://10.0.10.211:3300/api/showbooks/${bookId}`)
        .then(response => {
            commit('BOOK_DETAILS', response.data)
        })
}

// User Registration

export const registerUser = async ({ commit }, userData) => {
    // try {
    const response = await axios.post('http://10.0.10.211:3300/api/register', userData)
    commit('SET_USER', response.data.user)
    // }
    // catch (error) {
    //     commit('SET_REGISTRATION_ERROR', error.response.data.error)
    // }
};

// User Login

export const userLogin = async ({ commit }, loginData) => {
    // try {
    const response = await axios.post('http://10.0.10.211:3300/api/login', loginData);
    commit('USER_LOGIN', response.data);

    // Get Token
    const token = response.data.access_token;
    commit('USER_TOKEN', token);

    // Get User Id
    const user = response.data.user_id;
    commit('USER_ID', user);
    // }
    // catch (error) {
    //     commit('SET_REGISTRATION_ERROR', error.response.data.error)
    // }
};

// Book Add To Cart

export const addProductToCart = async ({ commit }, { bookid, quantity, bookprice }) => {

    console.log(bookid, bookprice, quantity);

    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');


    const apiUrl = 'http://10.0.10.211:3300/api/cart/add';
    try {
        const response = await axios.post(apiUrl, {
            book_id: bookid,
            price: bookprice,
            quantity: quantity,
            user_id: userId
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });

        commit('ADD_TO_CART', response.data)
    } catch (error) {
        console.error('Error adding book to cart:', error);
    }
};


// Cart Books

export const cartBooks = ({ commit }) => {
    // Retrieve the token from local storage
    const userToken = localStorage.getItem('token');

    // Check if the token exists
    if (userToken) {
        // Define the headers with the authorization token
        const headers = {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        };

        // Make the API request with the headers
        axios.get('http://10.0.10.211:3300/api/cart', { headers })
            .then(response => {
                commit('CART_BOOKS', response.data.cart);
            })
            .catch(error => {
                console.error('Error fetching cart books:', error);
            });
    } else {
        console.error('No user token found in local storage.');
    }
}

// Remove Cart Book

export const deleteFromCart = ({ commit }, cartId) => {
    const userToken = localStorage.getItem('token');

    if (userToken) {
        const headers = {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        };

        axios.delete(`http://10.0.10.211:3300/api/remove/${cartId}`, { headers })
            .then(response => {
                commit('REMOVE_FROM_CART', cartId);
            })
            .catch(error => {
                console.error('Error deleting book from the cart:', error);
            });
    } else {
        console.error('No user token found in local storage.');
    }
};