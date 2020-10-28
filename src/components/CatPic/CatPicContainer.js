import React, {useEffect} from 'react'
import CatPic from "./CatPic";
import {getPic} from "../../redux/animalsReducer";
const {connect} = require("react-redux");

const CatPicApi = (props) => {

    useEffect(() => {
        props.getPic()
    }, [])

    return (
        <CatPic cat_pic={props.cat_pic}/>
    )
}

function mapStateToProps(state) {
    return {
        cat_pic: state.animals.cat_pic
    }
}

const CatPicContainer = connect(mapStateToProps, { getPic })(CatPicApi)

export default CatPicContainer
