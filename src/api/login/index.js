import {getApiNoAuth} from '../utils'


export default {
    userlogin(window, username, password){
        return getApiNoAuth()
        .post('Users/login', {
            username : username,
            password : password
        })
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}