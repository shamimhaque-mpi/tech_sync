import route from "devlien/route";
import Auth from "../app/Http/Middleware/Auth.js";

/**
 * Register application routes.
 *
 * This file defines the HTTP routes for the application.
 * Each route maps a URL path to a controller method.
 *
 * Route format: route.get('route-name', 'Controller@method')
 *
 * Example:
 * GET request to '/' will be handled by DevlienController's index() method.
 */

export default route.serve(route => {
    
    route.group({'prefix':'api', 'middleware':[Auth]}, (route)=>{

        route.group({ 'prefix':'user' }, (route)=>{
            route.post('create', 'UserController@create');
            route.get('list', 'UserController@list');
            route.get(':id', 'UserController@details');
        });

        route.group({ 'prefix':'tag' }, (route)=>{
            route.post('create', 'TagController@create');
            route.post('update/:id', 'TagController@update');
            route.get('list', 'TagController@list');
        });

        route.group({ 'prefix':'role' }, (route)=>{
            route.post('create', 'RoleController@create');
            route.post('update/:id', 'RoleController@update');
            route.get('list', 'RoleController@list');
        });

        route.group({ 'prefix':'forum' }, (route)=>{
            route.post('create', 'ForumController@create');
            route.post('update/:id', 'ForumController@update');
            route.get('list', 'ForumController@list');

            route.group({ 'prefix':':id/comment' }, (route)=>{
                route.post('create', 'ForumController@createComment');
                route.post('update/:id', 'ForumController@updateComment');
                route.get('list', 'ForumController@CommentList');
            });
        });
    })
});