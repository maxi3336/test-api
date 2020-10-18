import React from 'react'
import CatFact from "./CatFact";
import {getFact, getPic} from "../../redux/animalsReducer";
const {connect} = require("react-redux");

class CatFactApiContainer extends React.Component{
    componentDidMount() {
        this.props.getFact()
    }

    render() {
        return (
            <CatFact cat_fact={this.props.cat_fact} getFact={this.props.getFact} getPic={this.props.getPic}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        cat_fact: state.animals.cat_fact
    }
}

const CatFactContainer = connect(mapStateToProps, { getFact, getPic })(CatFactApiContainer)

export default CatFactContainer
