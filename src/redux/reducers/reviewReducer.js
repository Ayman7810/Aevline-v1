import {   CREATE_REVIEW, DELETE_REVIEW, EDIT_REVIEW, GET_ALL_REVIEW} from "./type"

const inatioal = {
    createRate:[],
    getAllRate:[],
    editRate:[],
    lodaing : true
}

const reviewReducer = (state = inatioal , action)=>{
        switch(action.type){
          case CREATE_REVIEW :
            return {
                ...state ,
                createRate :action.paylode,
              lodaing : false
            }
          case GET_ALL_REVIEW :
            return {
                ...state ,
                getAllRate :action.paylode,
              lodaing : false
            }
          case EDIT_REVIEW :
            return {
                ...state ,
                editRate :action.paylode,
                done: true, 
              lodaing : false,
            }
      
          default :
           return state;
        }
}

export default reviewReducer