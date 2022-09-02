import { ADD_TODO, INC_COUNT, UPDATE_USER,STATUS } from "./action";

export const reducer = (store, action) =>{
    switch( action.type ){
        case INC_COUNT:
            return {
                ...store,
                count: store.count + action.payload
            }
        case ADD_TODO:
            return {
                ...store,
                todo: [...store.todo, action.payload]
            }    
        case UPDATE_USER:
            return {
                ...store,
                userList: [...store.userList, action.payload]
            }   
        case STATUS:
            return {
                ...store,
                status: true
            }     

            default:
                return store;
    }
}