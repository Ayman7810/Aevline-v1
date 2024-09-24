import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_LIMIT_CATEGORY, GET_One_CATEGORY } from "./type"



const inatioal = {
    category:[],
    limitCategory:[],
    OneCatygory:[],
    lodaing : true
}

const categoryReducer = (state = inatioal , action)=>{
        switch(action.type){
          case  GET_ALL_CATEGORY: 
          return {
            ...state, 
            category :action.paylode,
            lodaing :false
          } 
          case  GET_LIMIT_CATEGORY: 
          return {
            ...state, 
            limitCategory :action.paylode,
            lodaing :false
          } 
          case  GET_One_CATEGORY: 
          return {
            OneCatygory :action.paylode,
            lodaing :false
          } 
          case CREATE_CATEGORY :
            return {
              category :action.paylode,
              lodaing : false
            }
          case  GET_ERROR : 
          return {
            category : action.paylode,
            lodaing : true,
          }
          default : return state;
        }
}

export default categoryReducer