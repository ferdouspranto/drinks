import axios from "axios";


// const BASE_URL='http://localhost:1337/api';
// const BASE_URL='https://tubeguruji-admin.herokuapp.com/api'
const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

const getPost=axios.get(BASE_URL);
// const getPostById=(strCategory)=>axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`);

export default{
    getPost,
    // getPostById
}
