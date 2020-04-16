import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

// async deals with promises the same that .then works, but it's easier to read
export const fetchData = async () => {
    try {
        const response = await axios.get(url);
       
        return response;
    } catch (error){

    }
}