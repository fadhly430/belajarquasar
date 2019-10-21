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

    putEmployee(window, id, nama, jeniskelamin, status, tanggallahir){
        return getApiNoAuth()
        .put('/employees/'+id ,{
            nama : nama,
            jeniskelamin : jeniskelamin,
            status : status,
            tanggallahir : tanggallahir

        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    postAdmin(window, nama, jeniskelamin, status, tanggallahir){
        return getApiNoAuth()
        .post('/employees/' ,{
            nama : nama,
            jeniskelamin : jeniskelamin,
            status : status,
            tanggallahir : tanggallahir
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
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