export interface IProducts{
    id: number;
    productImageUrl: string;
    productName: string;
    price: string;
    properties: IProductsProps[]
}

export interface IProductsProps{
    propId?: number;
    propName: string;
    selectOptions?:any[];
    propIcon?: string;
    propColor?: string;
    value?: number;
}