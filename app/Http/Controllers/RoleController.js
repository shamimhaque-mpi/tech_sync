import Controller from "devlien/controller";
import String from "devlien/string";
import Role from "../../Models/Role.js";
import RoleResource from "../Resources/Role/RoleResource.js";
import RoleListResource from "../Resources/Role/RoleListResource.js";

/**
 * RoleController
 * This controller handles requests for the home or root page.
 */
export default class RoleController extends Controller {
    constructor() {
        super();
        // Any setup or initialization can go here.
    }

    /**
     * Handle GET request for the root route ("/").
     * @param {object} request - The HTTP request object containing query, headers, body, etc.
     * @return {object} A simple response string to confirm the controller is working.
     */
    async list(request) {
        return new RoleListResource(await Role.get());
    }


    /**
     * Handle creation of a new Role.
     * 
     * 1. Validates the incoming request to ensure:
     *    - `name` field is required.
     *    - `name` is unique in the `Roles` table (column: name).
     * 2. Extracts only the `name` field from the request to prevent unwanted data insertion.
     * 3. Creates and returns the new Role record.
     *
     * @param {Object<Request>} request - The incoming HTTP request instance.
     * @returns {Object<Role>} - The newly created Role model instance.
     */
    async create(request) 
    {
        // VALIDATE REQUESTED NAME
        await request.validate({
            name:'required|unique:roles,name'
        });

        // STORE REQUESTED NAME
        let data = await request.only('name');

        // MAKE NAME TO SLUG
        data['slug'] = String(data['name']).slug();
        
        // INSERT INTO THE ROLE TABLE AND REORGANIZE BY RESOURCE
        return new RoleResource(await Role.create(data));
    } 


    /**
     * Handle updating of a Role.
     * 
     * 1. Validates the incoming request to ensure:
     *    - `name` field is required.
     *    - `name` is unique in the `Roles` whithout won id table (column: name).
     * 2. Extracts only the `name` field from the request to prevent unwanted data insertion.
     * 3. Creates and returns the new Role record.
     *
     * @param {Object<Request>} request - The incoming HTTP request instance.
     * @returns {Object<Role>} - The newly created Role model instance.
     */
    async update(request, { id }) 
    {
        await request.validate({
            name:`required|exists:roles,id|unique:roles,name,id,${id}`
        });

        // UPDATE INTO THE ROLE TABLE AND REORGANIZE BY RESOURCE
        let role = await Role.where({"id":id}).update(await request.only('name'));
        return new RoleResource(role);
    }   
}
