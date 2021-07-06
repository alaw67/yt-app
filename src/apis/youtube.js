import axios from 'axios';

const KEY = 'AIzaSyD2tHKt2W4Nsg75R3HrX2cHQMfjKuHs-h4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});