import axios from 'axios';

// baseurl from Random API
const BASEURL = "https://randomuser.me/api/";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    GetEmployees: () => {
        return axios.get(BASEURL);
    }
};