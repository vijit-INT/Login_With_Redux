export const INC_COUNT = "INC_COUNT";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_USER = "UPDATE_USER";
export const STATUS = "STATUS";

export const inc_count = (payload) =>{
    return {
        type: INC_COUNT,
        payload
    }
}

export const add_todo = (payload) =>{
    return {
        type: ADD_TODO,
        payload
    }
}

export const update_user = (payload) =>{
    return {
        type: UPDATE_USER,
        payload
    }
}

export const status = () =>{
   return {
    type: STATUS
   }
}