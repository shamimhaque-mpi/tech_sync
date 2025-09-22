import Controller from "devlien/controller";
import User from "../../Models/User.js";
import UserResource from "../Resources/User/UserResource.js";
import UserListResource from "../Resources/User/UserListResource.js";
import UserCreateRequest from "../Requests/User/UserCreateRequest.js";
import UserUpdateRequest from "../Requests/User/UserUpdateRequest.js";
import Hash from "devlien/hash";

/**
 * UserController
 * This controller handles requests for the home or root page.
 */
export default class UserController extends Controller {

    constructor() {
        super();
        // Any setup or initialization can go here.
    }

    static requestBind = {
        create : UserCreateRequest,
        update : UserUpdateRequest,
    };


    /**
     * Handle GET request for the root route ("/").
     * @param {object} request - The HTTP request object containing query, headers, body, etc.
     * @return {string} A simple response string to confirm the controller is working.
     */
    async create(request) 
    {
        let data = await request.except(['confirm_password', 'tags']);
            data['password'] = await Hash.make(request.password);

        //
        let user = await User.create(data);
        if(request.tags)
            await (await user.tags()).sync(request.tags);
        
        return new UserResource(user);
    }   



    /**
     * Display a listing of the users.
     *
     * @param {Request} request - The incoming HTTP request instance.
     * @returns {Promise<UserListResource>} A resource-wrapped list of users.
     */
    async list(request){
        return new UserListResource(await User.get());
    }


    /**
     * Display a listing of the users.
     *
     * @param {Request} request - The incoming HTTP request instance.
     * @returns {Promise<UserListResource>} A resource-wrapped list of users.
     */
    async details(request, {id}){
        return new UserResource(await User.where({id:id}).first());
    }


    /**
     * Handle GET request for the root route ("/").
     * @param {object} request - The HTTP request object containing query, headers, body, etc.
     * @return {string} A simple response string to confirm the controller is working.
     */
    async update(request, {id}) 
    {
        let data = await request.only('name', 'bio');
        if(request.password) data['password'] = await Hash.make(request.password);

        let user = await User.where({id:id}).update(data);

        if(request.tags)
            await (await user.tags()).sync(request.tags);

        return new UserResource(user);
    }  
}
