
import axios from 'axios'

const baseAPI = process.env.NEXT_PUBLIC_API
export const uploadImageToServer = async (images: FormData) => {
    const response = await axios(`${baseAPI}/api/v1/files/upload`,{
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        data: images
    })
    return response
};                                                                                                  ``
//uploadProduct
export const uploadProduct = async (product: ProductRequest) => {
    const response = await axios(`${baseAPI}/api/v1/products`,{
        method: "POST",
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
        },
        data: JSON.stringify(product),
    });
    return response;
};



