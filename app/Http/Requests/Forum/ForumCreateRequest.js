export default class ForumCreateRequest {

    static namespace = "app/Http/Requests";
    /**
     * Get the validation rules that apply to the request.
     *
     * @return Object<string, string>
     */
    rules(request)
    {
        request.add({creator_id:request.user.id});

        return {
            creator_id : 'required|exists:users,id',
            title : "required",
            description : "required",
            status : "required|in:pending,approved,rejected"
        };
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return Object<string, string>
     */
    messages()
    {
        return {};
    }
}