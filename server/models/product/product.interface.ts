/**
 * The Product interface used to map the documents received from the Data Access layer (mongoose) into our services
 * Separates our Service layer from the Application Data Access layer
 */
export interface IProduct {
    type: string,
    size?: string,
    brand: string,
    model?: string,
    color: string,
    lostAt: Date,
}
