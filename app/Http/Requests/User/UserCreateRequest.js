export default class UserCreateRequest {

    static namespace = "app/Http/Requests/User";
    /**
     * Get the validation rules that apply to the request.
     *
     * @return Object<string, string>
     */
    rules(request)
    {
        return {};
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