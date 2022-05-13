import {apiService} from '../../../utils/api-Services'
import { Alert } from 'react-native';


const getProduct = async () => {
    return new Promise((resolve, reject) => {
        apiService('get', '/products',null).then(
            res => {
                //   console.log('res data', res)
                let responseData = res;
                resolve(responseData);
            },
            err => {
                let errorResponse = err.response.data;
                reject(errorResponse);
                // Alert.alert('Warning!', errorResponse.content);
            },
        );
    });
};


export { getProduct };