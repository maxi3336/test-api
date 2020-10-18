import React from 'react'
import CatPic from "./CatPic";
import {getPic} from "../../redux/animalsReducer";
const {connect} = require("react-redux");

class CatPicApiContainer extends React.Component{
    componentDidMount() {
        this.props.getPic()
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

const CatPicContainer = connect(mapStateToProps, { getPic })(CatPicApiContainer)

export default CatPicContainer
