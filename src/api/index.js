import axios from 'axios';

const nameUrl = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';
const currUrl = 'https://free.currconv.com/api/v7/convert?q=${from_currency}_${to_currency}&compact=ultra&apiKey=dd8e835c3d0a875afe5e';


export const fetchNames = async () => {
    try {
        
        const  {data} = await axios.get(nameUrl);
        const modifiedData = data.map((value) => ({
            first : value.first,
            last : value.last,
            
        }))
        
        return modifiedData;

    } catch (error) {
        console.log('error' + error);
    }
}

export const fetchCurrency = async (from, to) => {
    try {
        
        const  {data}  = await axios.get(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`);
        return data;

    } catch (error) {
        console.log('error' + error);
    }
}
