import { v4 } from 'uuid';
import { v4 as uuidv4 } from 'uuid';
const INITIAL_STATE =  {todos: []}
function rootReducer(state = INITIAL_STATE, action) {
switch(action.type) {
    // case 'TITLE':
    //     return [{...state}].push(state.title = action.payload)
        case "TITLE": 
            return { ...state, todos: [...state.todos, {task: action.payload, id: v4()}] }
        case "DELETE": 
        return { ...state, todos: state.todos.filter(todo => todo.id !== action.id)}
          
         

        
        

    // case 'DESCRIPTION':
    //     return [{...state}, {description: state.description = action.payload}]
        
        default:
      return state;
}
}

export default rootReducer;