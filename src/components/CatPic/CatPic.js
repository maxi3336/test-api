import React from 'react'

const CatPic = (props) => {
    return(
        <div className='col'>
            <img className='img-thumbnail' src={props.cat_pic} alt='Котик'/>
        </div>
    )
}

export default CatPic
