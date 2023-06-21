import axios from "axios";

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

const getPost=axios.get(BASE_URL);

export default{
    getPost,

}
