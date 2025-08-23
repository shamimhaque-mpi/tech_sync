import Controller from "devlien/controller";
import PersonalAccessToken from "devlien/model/personalAccessToken";
import Hash from "devlien/hash";
import User from "../../../Models/User.js";

/**
 * AccessController
 * This controller handles requests for the home or root page.
 */
export default class AccessController extends Controller {
    constructor() {
        super();
        // Any setup or initialization can go here.
    }

    /**
     * Handle GET request for the root route ("/api/auth/create-token").
     * @param {object} request - The HTTP request object containing query, headers, body, etc.
     * @return {token:string, error:object} 
     */
    async createToken(request) {

        await request.validate({
            'username' : 'required|exists:users,username',
            'password' : 'required|len:8'
        });

        const user = await User.where(await request.only('username')).first();

        if(await Hash.check(request.password, user.getHiddenAttributes().password))
            return await user.createToken('api');
        else 
            throw {
                status : 401,
                message : 'The Provided Credentials is incorrect.'
            }
    }  

    /**
     * Handle GET request for the root route ("/api/auth/refresh-token").
     * @param {object} request - The HTTP request object containing query, headers, body, etc.
     * @return {token:string, error:object} token
     */
    async refreshToken(request) {

        await request.validate(
            { 'token' : 'required|exists:personal_access_tokens,token' },
            { 'token.exists' : 'Invalid Token' }
        );

        const user = (await PersonalAccessToken
        .where({tokenable_type:User.class()})
        .where({token:request.token})
        .first())
        .tokenable();

        //
        return (await user).createToken('api');
    }  
}
