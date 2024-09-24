import UseGetData from "../../hooks/UseGetData";
import { UseInsertDataWithImage } from "../../hooks/UseInsertData";
import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_LIMIT_CATEGORY, GET_One_CATEGORY } from "../reducers/type";

// get All Data
const GetAllCategory =()=> async (dispach) => {

    try {
    const respose =await UseGetData(`/api/v1/categories`)
    // console.log(respose)
      dispach( {
        type :GET_ALL_CATEGORY,
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




const GetLimitCategory =(limit)=> async (dispach) => {

  try {
  const respose =await UseGetData(`/api/v1/categories?limit=${limit}`)
  // console.log(respose)
    dispach( {
      type :GET_LIMIT_CATEGORY,
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



// // get data via number page
// const GetCategoryPage =(page)=> async (dispach) => {

//   try {
//   const respose =await UseGetData(`/api/v1/categories?limit=6&page=${page}`)
//     dispach( {
//       type :GET_ALL_CATEGORY,
//       paylode : respose,
//     })
//   }
//   catch (e){
//           dispach({
//               type : GET_ERROR,
//               paylode : 'Error' + e 
//           })
//   }
// }


// get data via number page
const GetCategoryPage =(limit,page)=> async (dispach) => {

  try {
  const respose =await UseGetData(`/api/v1/categories?limit=${limit}&page=${page}`)
  // console.log(respose)
    dispach( {
      type :GET_LIMIT_CATEGORY,
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

// insert category new
const createCategory =(formData)=> async (dispach) => {

  try {
  const respose =await UseInsertDataWithImage(`/api/v1/categories` , formData)
  // console.log(respose)
    dispach( {
      type :CREATE_CATEGORY,
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



// get data via id 
const GetCategoryById =(id)=> async (dispach) => {

  try {
  const respose =await UseGetData(`/api/v1/categories/${id}`)
    dispach( {
      type :GET_One_CATEGORY,
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


export  {GetAllCategory , GetLimitCategory,GetCategoryPage ,createCategory,GetCategoryById}
