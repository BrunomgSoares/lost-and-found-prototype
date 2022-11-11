/**
 * A Data Transfer Object to be used when receiving a request to signup and signin request
 * Separates our business logic layer from the Application Controllers
 */
export interface IUserDTO {
    username: string,
    password: string,
}
