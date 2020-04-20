import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

// async deals with promises the same that .then works, but it's easier to read
// this function is in charge of pulling the data for the global and passing individual data to each country
export const fetchData = async (country) => {
    let changebleUrl = url;
    if(country){
        changebleUrl =`${url}/countries/${country}`
    }

    try {
        const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changebleUrl);
       
        return { confirmed, recovered, deaths, lastUpdate};
    } catch (error){
        console.log(error)
    }
}
// this function is in charge of pulling daily data
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
// this function is incharge of pulling the countries individually 
export const fetchCountries = async () => {
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
          return countries.map((country) => country.name)
        
    }catch(error){
        console.log(error)
    }
}