export class Product {
    productId: number;
    productCode: string;
    productName: string;
    price: number;

    constructor();
    constructor(pid: number, pnmae: string, pcode: string, price: number);


    constructor(pid?: number, pnmae?: string, pcode?: string, price?: number) {
            this.price = price ?? 0;
            this.productCode = pcode ?? "";
            this.productName = pnmae ?? "";
            this.productId = pid ?? 0;
        
    }
}
