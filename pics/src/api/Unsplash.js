import axios from 'axios'

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Dp3TU4gUAIM3AAm16MY8U2lr8VnnXXKMpbCUnX4q_8U'
    }
})