import axios from "axios"

// Get All Books

export const allBooks = ({ commit }) => {
    axios.get('http://10.0.10.99:3300/api/showbooks')
        .then(response => {
            commit('GET_BOOKS', response.data)
        })
}

// Get Book Details

// Get Books Details

export const getBookDetails = ({ commit, bookId }) => {
    axios.get(`http://10.0.10.99:3300/api/showbooks/${bookId}`)
        .then(response => {
            commit('BOOK_DETAILS', response.data)
        })
}