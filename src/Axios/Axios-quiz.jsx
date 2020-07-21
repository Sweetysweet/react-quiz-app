import axios from 'axios'

export default axios.create({
    baseURL: 'https://reactquiz-dab15.firebaseio.com/'
})