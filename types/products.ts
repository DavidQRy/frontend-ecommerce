export type ProductType = {
    id: number;
     productName: string;
        slug: string;
        description: string;
        active: boolean;
        isFeatured: boolean;
        taste: string;
        price: number;
        images: {
            id: number;
            attributes: {
                url: string
            }[];
        };
        category: {
            data: {
                attributes: {
                    slug: string;
                    categoryName: string;
                };
            };
        };
    atributes: {
        productName: string;
        slug: string;
        description: string;
        active: boolean;
        isFeatured: boolean;
        taste: string;
        price: number;
        images: {
            id: number;
            attributes: {
                url: string
            }[];
        };
        category: {
            data: {
                attributes: {
                    slug: string;
                    categoryName: string;
                };
            };
        };
    };
};