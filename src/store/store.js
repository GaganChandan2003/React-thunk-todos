import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { authReducer } from "./Auth/auth.reducer";
import { todosReducer } from "./Todos/todos.reducer";

const rootReducer=combineReducers({
    auth:authReducer,
    todos:todosReducer
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));