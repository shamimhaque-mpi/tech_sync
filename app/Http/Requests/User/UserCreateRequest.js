export default class UserCreateRequest {

    static namespace = "app/Http/Requests/User";
    /**
     * Get the validation rules that apply to the request.
     *
     * @return Object<string, string>
     */
    rules(request)
    {
        return {
            name: 'required',
            username: 'required|unique:users,username',
            email: 'required|email|unique:users,email',
            password: 'required|min:6',
            tags : 'required|array',
            confirm_password: 'required|same:password',
        };
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return Object<string, string>
     */
    messages(request)
    {
        return {};
    }
}