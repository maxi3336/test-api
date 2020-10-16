import React from 'react'
import * as axios from 'axios'
import CatPic from "./CatPic";
import {setPicAC} from "../../redux/animalsReducer";
const {connect} = require("react-redux");

class CatPicApiContainer extends React.Component{
    componentDidMount() {
        axios.get('https://aws.random.cat/meow')
            .then(response => {
                this.props.setPic(response.data.file)
            })
    }

    render() {
        return (
            <CatPic cat_pic={this.props.cat_pic}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        cat_pic: state.animals.cat_pic
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setPic: (pic) => {
            dispatch(setPicAC(pic))
        }
    }
}

const CatPicContainer = connect(mapStateToProps, mapDispatchToProps)(CatPicApiContainer)

export default CatPicContainer
