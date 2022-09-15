import axios from 'axios';

export const fetchHarryPotterMinifigs = () => {
    return axios.get('https://rebrickable.com/api/v3/lego/minifigs?page_size=3&search=harry potter', {headers: {
            Authorization: `key ${process.env.REACT_APP_API_KEY}`,
        },
    });
}
export const fetchMinifigDetails = (set_num: string) => {
    return axios.get(`https://rebrickable.com/api/v3/lego/minifigs/${set_num}/parts/`,{headers: {
            Authorization: `key ${process.env.REACT_APP_API_KEY}`,
        },
    });
}

export const sendPurchaseRequest =() => {
    return axios.get('https://rebrickable.com/api/v3/lego/colors/r', {headers: {
            Authorization: `key ${process.env.REACT_APP_API_KEY}`,
        },
    });
}

