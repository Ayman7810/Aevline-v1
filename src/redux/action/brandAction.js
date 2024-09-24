import UseGetData from "../../hooks/UseGetData"
import { UseInsertDataWithImage } from "../../hooks/UseInsertData"
import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND } from "../reducers/type"

// get All Data
export const GetAllBrands =(limite)=> async (dispach) => {

    try {
    const respose =await UseGetData(`/api/v1/brands?limit=${limite}`)
    // console.log(respose)
      dispach( {
        type :GET_ALL_BRAND,
        paylode : respose,
     
      })
    }
    catch (e){
            dispach({
                type : GET_ERROR,
                paylode : 'Error' + e 
            })
    }
}


// get data via number page
export const GetBrandPage =(limit,page)=> async (dispach) => {

    try {
    const respose =await UseGetData(`/api/v1/brands?limit=${limit}&page=${page}`)
    // console.log(respose)
      dispach( {
        type :GET_ALL_BRAND,
        paylode : respose,
     
      })
    }
    catch (e){
            dispach({
                type : GET_ERROR,
                paylode : 'Error' + e 
            })
    }
  }
// get data via id
export const GetBrandById =(id)=> async (dispach) => {

    try {
    const respose =await UseGetData(`/api/v1/brands/${id}`)
    // console.log(respose)
      dispach( {
        type :GET_ONE_BRAND,
        paylode : respose,
     
      })
    }
    catch (e){
            dispach({
                type : GET_ERROR,
                paylode : 'Error' + e 
            })
    }
  }


  
// insert brade new
export const createBrand =(formData)=> async (dispach) => {

    try {
    const respose =await UseInsertDataWithImage(`/api/v1/brands` , formData)
    // console.log(respose)
      dispach( {
        type :CREATE_BRAND,
        paylode : respose,
        lodaing : true
      })
    }
    catch (e){
            dispach({
                type : GET_ERROR,
                paylode : 'Error' + e 
            })
    }
  }
  