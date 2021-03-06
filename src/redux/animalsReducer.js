import {catApi} from "../api/api";

const SET_FACT = 'test-api/set-data/SET-FACT'
const SET_PIC = 'test-apo/set-data/SET-PIC'

let initialState = {
    cat_fact:  '',
    cat_pic: ''
}

const animalsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FACT: {
            return {...state, cat_fact: action.fact}
        }
        case SET_PIC: {
            return {...state, cat_pic: action.pic}
        }
        default:
            return state
    }

}

export const setFact = fact => ({type: SET_FACT, fact})
export const setPic = pic => ({type: SET_PIC, pic})

export const getFact = () => async dispatch => {
    let response = await catApi.getFact()
    dispatch(setFact(response.text))
}
export const getPic = () => async dispatch => {
    let response = await catApi.getPic()
    dispatch(setPic(response.file))
}

export default animalsReducer
