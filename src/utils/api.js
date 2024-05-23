import axios from 'axios'

const Base_URL="https://api.jikan.moe/"
const API=axios.create({
    baseURL:Base_URL
})
export {API}