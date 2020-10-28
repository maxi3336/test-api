import React, {useEffect} from 'react'
import CatFact from "./CatFact";
import {getFact, getPic} from "../../redux/animalsReducer";
const {connect} = require("react-redux");

const CatFactApiContainer  = props => {

    useEffect(() => {
        props.getFact()
    }, [])

    return (
        <CatFact cat_fact={props.cat_fact} getFact={props.getFact} getPic={props.getPic}/>
    )
}

function mapStateToProps(state) {
    return {
        cat_fact: state.animals.cat_fact
    }
}

const CatFactContainer = connect(mapStateToProps, { getFact, getPic })(CatFactApiContainer)

export default CatFactContainer
