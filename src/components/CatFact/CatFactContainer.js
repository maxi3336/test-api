import React from 'react'
import * as axios from 'axios'
import CatFact from "./CatFact";
import {setFactAC} from "../../redux/animalsReducer";
const {connect} = require("react-redux");

class CatFactApiContainer extends React.Component{
    componentDidMount() {
        axios.get('https://cat-fact.herokuapp.com/facts/random')
            .then(response => {
                this.props.setFact(response.data.text)
            })
    }

    render() {
        return (
            <CatFact cat_fact={this.props.cat_fact}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        cat_fact: state.animals.cat_fact
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setFact: (fact) => {
            dispatch(setFactAC(fact))
        }
    }
}

const CatFactContainer = connect(mapStateToProps, mapDispatchToProps)(CatFactApiContainer)

export default CatFactContainer
