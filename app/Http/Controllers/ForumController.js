import Controller from "devlien/controller";
import ForumCreateRequest from "../Requests/Forum/ForumCreateRequest.js";
import ForumUpdateRequest from "../Requests/Forum/ForumUpdateRequest.js";
import ForumResource from "../Resources/Forum/ForumResource.js";
import ForumListResource from "../Resources/Forum/ForumListResource.js";
import Forum from "../../Models/Forum.js";
import Image from "../../Models/Image.js";
import DateTime from "devlien/dateTime";

/**
 * ForumController
 * This controller handles requests for the home or root page.
 */
export default class ForumController extends Controller {

    static requestBind = {
        create : ForumCreateRequest,
        update : ForumUpdateRequest
    };

    constructor() {
        super();
        // Any setup or initialization can go here.
    }

    /**
     * Handle GET request for the root route ("/").
     * @param {object} request - The HTTP request object containing query, headers, body, etc.
     * @return {string} A simple response string to confirm the controller is working.
     */
    async list(request) {
        return new ForumListResource(await Forum.get());
    }  


    /**
     * Handle creation of a new Forum.
     * 
     * @param {Object<Request>} request - The incoming HTTP request instance.
     * @returns {Object<Forum>} - The newly created Forum model instance.
     */
    async create(request) 
    {
        // STORE REQUESTED NAME
        let data = await request.only('title', 'description', 'status', 'creator_id');
        // INSERT INTO THE ROLE TABLE AND REORGANIZE BY RESOURCE
        const forum = await Forum.create(data);


        for(const file of await request.files()){
            await Image.create({
                name : file.name(),
                path : await file.upload('public/forum', DateTime.timestamp()),
                imageable_type : Forum.class(),
                imageable_id   : forum.id
            });
        }

        if(request.tags)
            await (await forum.tags()).sync(JSON.parse(request.tags));
        //
        return new ForumResource(forum); 
    } 


    /**
     * Handle updating of a new Forum.
     * 
     * @param {Object<Request>} request - The incoming HTTP request instance.
     * @returns {Object<Forum>} - The newly created Forum model instance.
     */
    async update(request, {id}) 
    {
        // STORE REQUESTED NAME
        let data = await request.only('title', 'description', 'status', 'creator_id');
        
        // INSERT INTO THE ROLE TABLE AND REORGANIZE BY RESOURCE
        const forum = await Forum.where({id:id}).update(data);
        await (await forum.tags()).sync(request.tags);
        return new ForumResource(forum); 
    } 



    async CommentList(request){}
    async createComment(request){}
    async updateComment(request){}
}
