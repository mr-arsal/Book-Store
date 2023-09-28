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
    // }
    // catch (error) {
    //     commit('SET_REGISTRATION_ERROR', error.response.data.error)
    // }
};