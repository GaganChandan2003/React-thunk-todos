import { add_t ,del_t,get_t} from "./todos.type";
export const todosReducer=(state={data:[]},{type,payload})=>
{
    switch(type)
    {
        case add_t:{return{...state,data:[payload,...state.data]}}
        case get_t:{return {...state,data:payload}}
        default:{return {...state};}
    }
}