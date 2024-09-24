import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import subCategoryReducer from "./subCategoryReducer";
import producteReducer from "./producteReducer";
import brandReducer from "./brandReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import wishListReducer from "./wishListReducer";
import couponReducer from "./couponReducer";
import addressReducer from "./addressReducer";
import userDataReducer from "./userDataReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
    allCategory : categoryReducer,
    allBrands: brandReducer,
    subCategory :subCategoryReducer,
    productes :producteReducer,
    auth : authReducer,
    review : reviewReducer,
    wishList:wishListReducer,
    coupon:couponReducer ,
    address:addressReducer ,
    user:userDataReducer ,
    cart:cartReducer ,
})