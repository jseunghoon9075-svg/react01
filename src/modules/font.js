import { createAction, handleActions } from 'redux-actions'

// 리덕스 구현
// type
const CHANGE_COLOR = "font/CHANGE_COLOR"
const CHANGE_FONT_SIZE = "font/CHANGE_FONT_SIZE"
// action

export const changeFontSize = createAction(CHANGE_FONT_SIZE)
export const changeColor = createAction(CHANGE_COLOR)

// state
const initialState = {
    fontSize : "",
    color: "",
}

// reducer
const font = handleActions({
    [CHANGE_COLOR]: (state, action) => ({...state, color: action.payload}) ,
    [CHANGE_FONT_SIZE]: (state, action) => ({...state, fontSize: "40px"})
}, initialState)

export default font;








