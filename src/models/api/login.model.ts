export interface ILoginPostRequestDTO {

    /**
     * @var string password field.
     */
    password: string;

    /***
     * @var string username field.
     */
    username: string;
}

export interface ILoginPostResponseDTO {
    /**
     * @var string token field.
     */
    token: string;
}
