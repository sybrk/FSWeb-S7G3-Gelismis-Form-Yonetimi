import axios from 'axios';

const DataObj = {

    getData: async (page) => {
        let result = [];
        try {
            const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
            console.log(response.data);
            result = response.data;
        } catch (error) {
            console.error(error);
        }
        return result;
    },
    
    postData: async (name, email, password, termsAndConditions, job) => {
        let result;
        try {
            
            const requestResult = await axios.post('https://reqres.in/api/users', {
                name,
                job ,
                email,
                password
            });

            let {
                data,
                status
            } = requestResult;

            //debugger;
            if (status == 200 || status == 201) {
                console.log('data: ', data);
                result = true;
            }

        } catch (error) {
            console.log("error: ", error);
            result = false;
        }

        return result;
    },

    getSingleUser: async (userId) => {
        let result={};
        try {
            const response = await axios.get(`https://reqres.in/api/users/${userId}`);
            console.log(response.data);
            result = response.data;
        } catch (error) {
            console.error(error);
        }
        return result;

    }


}

export default DataObj;
