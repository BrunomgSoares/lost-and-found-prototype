/**
 * The User interface used to map the documents received from the Data Access layer (mongoose) into our services
 * Separates our Service layer from the Application Data Access layer
 */
export interface IUser {
    username: string,
    password: string,
}
