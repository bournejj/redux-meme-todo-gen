
const INITIAL_STATE =  {img: '', top: '', bottom: ''}
function rootReducer(state = INITIAL_STATE, action) {
switch(action.type) {
    case 'IMG':
        return {...state, img: state.img = action.payload}
    case 'TOP':
        return {...state, top: state.top = action.payload}
        
    case 'BOTTOM':
    return {...state, bottom: state.bottom = action.payload}
        default:
      return state;
}
}

export default rootReducer;