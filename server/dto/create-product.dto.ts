/**
 * A Data Transfer Object to be used when receiving a request to create a new Product
 * Separates our business logic layer from the Application Controllers
 */
export interface ICreateProductDTO {
    type: string,
    size: string,
    brand: string,
    model?: string,
    color: string,
    lostAt: Date,
}
