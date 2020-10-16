const SET_FACT = 'SET-FACT'
const SET_PIC = 'SET-PIC'

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
            debugger
            return {...state, cat_pic: action.pic}
        }
        default: {
            return state
        }
    }

}

export const setFactAC = (fact) => ({type: SET_FACT, fact})
export const setPicAC = (pic) => ({type: SET_PIC, pic})

export default animalsReducer
