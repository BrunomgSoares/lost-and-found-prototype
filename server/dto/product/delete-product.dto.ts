/**
 * A Data Transfer Object to be used when receiving a request to delete an existing Product
 * Separates our business logic layer from the Application Controllers
 */
export interface IDeleteProductDTO {
    id: string,
}
