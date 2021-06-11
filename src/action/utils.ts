import axios from 'axios'
import _ from 'lodash'
function query(url:any,method:any,dataGet?:any,dataPost?:any,options?:any):Promise<any> {
    return new Promise((resolve,reject) => {
        const header = {
            'Access-Control-Allow-Origin': true
        }
        axios.request( _.defaultsDeep(options,{
            url: url,
            withCredentials: true,
            method: method,
            header: header,
            json: true,
            params: dataGet,
            data: dataPost,
        })).then(function (response) {
            resolve(response)
        }).catch(function (error) {
            console.log(error);
            throw error
        })
    })
    
}

export default {
    query
}