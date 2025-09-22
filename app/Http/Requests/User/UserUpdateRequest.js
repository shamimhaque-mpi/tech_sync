export default class UserUpdateRequest {

    static namespace = "app/Http/Requests/User";
    /**
     * Get the validation rules that apply to the request.
     *
     * @return Object<string, string>
     */
    async rules(request)
    {
        try {
            request.tags = JSON.parse(request.tags);
        }
        catch(e){}

        return {
            confirm_password : 'nullable|same:password'
        };
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return Object<string, string>
     */
    async messages()
    {
        return {};
    }
}