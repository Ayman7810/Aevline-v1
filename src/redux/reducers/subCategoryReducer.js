import { CREATE_SUB_CATEGORY, GET_ALL_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "./type"

const inatioal = {
    subCategory:[],
    lodaing : true
}

const subCategoryReducer = (state = inatioal , action)=>{
        switch(action.type){
          case  CREATE_SUB_CATEGORY: 
          return {
            ...state, 
            subCategory :action.paylode,
            lodaing :false
          } 
          case GET_SUB_CATEGORY : 
          return {
            ...state, 
            subCategory :action.paylode,
            lodaing :false
          }
          case  GET_ERROR : 
          return {
            subCategory : action.paylode,
            lodaing : true,
          }
          default : return state;
        }
}

export default subCategoryReducer