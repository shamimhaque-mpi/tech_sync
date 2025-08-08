import Controller from "devlien/controller";
import User from "../../Models/User.js";
import UserResource from "../Resources/User/UserResource.js";
import UserListResource from "../Resources/User/UserListResource.js";

/**
 * UserController
 * This controller handles requests for the home or root page.
 */
export default class UserController extends Controller {

    constructor() {
        super();
        // Any setup or initialization can go here.
    }

    /**
     * Handle GET request for the root route ("/").
     * @param {object} request - The HTTP request object containing query, headers, body, etc.
     * @return {string} A simple response string to confirm the controller is working.
     */
    async registration(request) {

        await request.validate({
            name: 'required',
            username: 'required',
            email: 'required|email',
            password: 'required|min:6',
            tags : 'required|array',
            confirm_password: 'required|same:password',
        });

        let user = await User.updateOrCreate(
            { username:request.username }, 
            await request.except(['confirm_password', 'tags'])
        );

        let tags = await user.tags();

        await tags.sync(request.tags)
    
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
}
