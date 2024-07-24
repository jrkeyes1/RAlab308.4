import axios from "axios";

const API_KEY = "live_sLCKZ9L5jndofoJPf9k7MXfHFcbuOMdiKQZIxxuD0JnftU41lt3tq5fC4l71Btts";


axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = live_sLCKZ9L5jndofoJPf9k7MXfHFcbuOMdiKQZIxxuD0JnftU41lt3tq5fC4l71Btts;

// Add Axios interceptors
axios.interceptors.request.use(config => {
    console.log("Request started");
    document.body.style.cursor = "progress";
    progressBar.style.width = '0%';
    return config;
});

axios.interceptors.response.use(response => {
    console.log("Request completed");
    document.body.style.cursor = "default";
    progressBar.style.width = '100%';
    return response;
}, error => {
    document.body.style.cursor = "default";
    return Promise.reject(error);
});

export default axios;




