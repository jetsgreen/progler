import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

// async deals with promises the same that .then works, but it's easier to read
export const fetchData = async (country) => {
    let changebleUrl = url;
    if(country){
        changebleUrl =`${url}/countries/${country}`
    }

    try {
        const response = await axios.get(changebleUrl);
       
        return response;
    } catch (error){
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`)
       const modifiedData = data.map((dailyData)=> ({
           confirmed: dailyData.confirmed.total,
           deaths: dailyData.deaths.total,
           date: dailyData.reportDate,
       }));
       return modifiedData

    } catch(error){
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
          return countries.map((country) => country.name)
        
    }catch(error){
        console.log(error)
    }
}