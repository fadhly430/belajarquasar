import { getApiNoAuth } from "../utils"

export default {
    getemployee(window){
        return getApiNoAuth()
        .get('employees')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },



    deleteAdmin(window, id){
        return getApiNoAuth()
        .delete('employees/'.concat(id))
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}