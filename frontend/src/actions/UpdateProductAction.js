// eslint-disable-next-line no-unused-vars
import { UPDATE_PRODUCT } from '../constants/UpdateProductConstant';

export const updateProduct = (productInfo) => ({
    type: UPDATE_PRODUCT,
    payload: productInfo
});