/*import axios from  'axios';
import { bodyParts, rapidApiKey } from '../constants';

const baseUrl  = 'https://gym-fit.p.rapidapi.com';

const apiCall = async (url, params)=>{
    try{
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
              }
            
        }
    const response = await axios.request(options);
    return response.data;
    
    }catch(err){
        console.log('error: ', err.message);
    
    }
    
    }
    
    export const fetchExercisesByBodypart = async (bodyPart)=>{
        let data = await apiCall(baseUrl+`exercises/exercise/${bodyPart}`);
        return data;
    }*/