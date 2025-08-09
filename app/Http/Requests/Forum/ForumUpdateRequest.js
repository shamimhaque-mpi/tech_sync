export default class ForumUpdateRequest {

    static namespace = "app/Http/Requests/Forum";
    /**
     * Get the validation rules that apply to the request.
     *
     * @return Object<string, string>
     */
    async rules(request, {id})
    {
        request.add({id:id});

        return {
            id : 'exists:forums,id',
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