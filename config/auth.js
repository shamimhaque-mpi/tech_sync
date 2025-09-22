import User from "../app/Models/User.js";

export default {

    defaults : {
        guard : 'api'
    },


    guards : {
        api : {
            driver : 'token',
            provider : 'user',
            expire : '1year',
        }
    },


    providers : {
        user : {
            driver : 'eloquent',
            model  : User, 
        }
    }
}