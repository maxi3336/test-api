import React from 'react'

const CatFact = (props) => {
    return(
        <div className='col border-right'>
            <h1>Интересный факт:</h1>
            <h5 className='text-primary'>{props.cat_fact}</h5>
            <button className="btn btn-primary mt-5" onClick={() => {
                props.getFact()
                props.getPic()
            }}>Get new</button>
        </div>
    )
}

export default CatFact
