import UseGetData, { UseGetDataWithToken } from "../../hooks/UseGetData"
import { UseInsertData } from "../../hooks/UseInsertData"
import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../reducers/type"


// get  Data
export const GetSubCategories =(id)=> async (dispach) => {

  try {
  const respose =await UseGetDataWithToken(`/api/v1/categories/${id}/subcategories`)
  // console.log(respose)
    dispach( {
      type :GET_SUB_CATEGORY,
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

// insert sub category new
export const createSubCategory =(data)=> async (dispach) => {

    try {
    const respose =await UseInsertData(`/api/v1/subcategories` , data)
    // console.log(respose)
      dispach( {
        type :CREATE_SUB_CATEGORY,
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
  

