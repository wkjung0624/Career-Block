import axios from 'axios';

export default {
    methods: {
        // return (await axios({ method: 'post', url, data }).catch(e => { console.log(e); })).data;
        async $api(queryName, data = {}, method = 'post') {
            // console.log("api called.. ", method, '\n', url, '\n', data);
            return (await axios({
                method: method,
                url: `/api/${queryName}`,
                data: data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    }
}