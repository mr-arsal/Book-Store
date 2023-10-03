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
    const userToken = localStorage.getItem('token');

    // Check if the token exists
    if (userToken) {
        const headers = {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        };

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
    console.log(cartId)

    if (userToken) {
        const headers = {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        };

        axios.delete(`http://10.0.10.211:3300/api/cart/remove/${cartId}`, { headers })
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

// Add Book 

export const addBook = async ({ commit }, bookData) => {
    console.log(bookData)
    const userToken = localStorage.getItem('token');

    if (userToken) {

        axios.post('http://10.0.10.211:3300/api/create/bookcatalog', {
            title: bookData.title,
            author: bookData.author,
            cover_image_url: bookData.cover_image_url,
            price: bookData.price,
            description: bookData.description
        }, {
            headers: {
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                commit('ADMIN_BOOKS', response.data.book);
            })
            .catch(error => {
                console.error('Error in adding book:', error);
            });
    } else {
        console.error('No token found in local storage.');
    }
};


// Show all users

export const showUsers = ({ commit }) => {
    const userToken = localStorage.getItem('token');

    if (userToken) {
        const headers = {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        };
        axios.get('http://10.0.10.211:3300/api/users', { headers })
            .then(response => {
                commit('SHOW_USERS', response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    } else {
        console.error('No user token found in local storage.');
    }
};

// Delete user by admin

export const deleteUser = ({ commit }, userId) => {

    console.log(userId)
    const userToken = localStorage.getItem('token');

    if (userToken) {
        const headers = {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        };

        axios.delete(`http://10.0.10.211:3300/api/users/${userId}`, { headers })
            .then(response => {
                console.log(response)
                commit('DELETE_USER', userId);
                // return response.data;
            })
            .catch(error => {
                console.error('Error deleting user:', error);
                throw error;
            });
    } else {
        console.error('No user token found in local storage.');
        return Promise.reject('No user token found');
    }
};

// Delete Book By Admin

export const deleteBook = ({ commit }, bookId) => {

    const userToken = localStorage.getItem('token');

    if (userToken) {
        const headers = {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        };

        axios.delete(`http://10.0.10.211:3300/api/deletebooks/${bookId}`, { headers })
            .then(response => {
                // console.log(response)
                commit('DELETE_BOOK', bookId);
                // return response.data;
            })
            .catch(error => {
                console.error('Error deleting book:', error);
                throw error;
            });
    } else {
        console.error('No user token found in local storage.');
        return Promise.reject('No user token found');
    }
};

// Show All Orders

export const showOrders = ({ commit }) => {
    const userToken = localStorage.getItem('token');

    if (userToken) {
        const headers = {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        };

        axios.get('http://10.0.10.211:3300/api/show/orders', { headers })
            .then(response => {
                commit('SHOW_ORDERS', response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    } else {
        console.error('No user token found in local storage.');
    }
}

