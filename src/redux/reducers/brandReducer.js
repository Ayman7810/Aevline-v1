import {  CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND } from "./type"

const inatioal = {
    brand:[],
    OneBrand:[],
    lodaing : true
}

const brandReducer = (state = inatioal , action)=>{
        switch(action.type){
          case GET_ALL_BRAND :
            return {
                ...state ,
              brand :action.paylode,
              lodaing : false
            }
          case GET_ONE_BRAND :
            return {
              OneBrand :action.paylode,
              lodaing : false
            }
          case CREATE_BRAND :
            return {
                ...state ,
              brand :action.paylode,
              lodaing : false
            }
          case  GET_ERROR : 
          return {
            brand : action.paylode,
            lodaing : true,
          }
          default : return state;
        }
}

export default brandReducer