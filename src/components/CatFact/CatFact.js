import React from 'react'

const CatFact = (props) => {
    return(
        <div className='col border-right'>
            <h1>Интересный факт:</h1>
            <h5 className='text-primary'>{props.cat_fact}</h5>
        </div>
    )
}

export default CatFact
