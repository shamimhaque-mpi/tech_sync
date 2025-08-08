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
            route.post('registration', 'UserController@registration');
            route.get('list', 'UserController@list');
            route.get(':id', 'UserController@details');
        });

        route.group({ 'prefix':'tag' }, (route)=>{
            route.get('list', 'TagController@list');
        });
    })
});