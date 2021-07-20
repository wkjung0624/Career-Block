import axios from 'axios';

export default {
    methods: {
        // return (await axios({ method: 'post', url, data }).catch(e => { console.log(e); })).data;
        async $api(method, url, data) {
            console.log("api called.. ", method, '\n', url, '\n', data);
            return (await axios({
                method: method,
                url: url,
                data: data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    }
}