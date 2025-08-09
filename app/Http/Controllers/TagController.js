import Controller from "devlien/controller";
import Tag from "../../Models/Tag.js";
import TagListResource from "../Resources/Tag/TagListResource.js";
import TagResource from "../Resources/Tag/TagResource.js";

/**
 * TagController
 * This controller handles requests for the home or root page.
 */
export default class TagController extends Controller {
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
        return new TagListResource(await Tag.get());
    }


    /**
     * Handle creation of a new tag.
     * 
     * 1. Validates the incoming request to ensure:
     *    - `name` field is required.
     *    - `name` is unique in the `tags` table (column: name).
     * 2. Extracts only the `name` field from the request to prevent unwanted data insertion.
     * 3. Creates and returns the new Tag record.
     *
     * @param {Object<Request>} request - The incoming HTTP request instance.
     * @returns {Object<Tag>} - The newly created Tag model instance.
     */
    async create(request) 
    {
        await request.validate({
            name:'required|unique:tags,name'
        });
        const tag = await Tag.create(await request.only('name'));
        return new TagResource(tag);
    } 


    /**
     * Handle updating of a tag.
     * 
     * 1. Validates the incoming request to ensure:
     *    - `name` field is required.
     *    - `name` is unique in the `tags` whithout won id table (column: name).
     * 2. Extracts only the `name` field from the request to prevent unwanted data insertion.
     * 3. Creates and returns the new Tag record.
     *
     * @param {Object<Request>} request - The incoming HTTP request instance.
     * @returns {Object<Tag>} - The newly created Tag model instance.
     */
    async update(request, { id }) 
    {
        await request.validate({
            name:`required|exists:tags,id|unique:tags,name,id,${id}`
        });
        const tag = await Tag.where({"id":id}).update(await request.only('name'));
        return new TagResource(tag);
    } 
}
