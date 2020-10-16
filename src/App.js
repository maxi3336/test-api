import React from 'react';
import CatFactContainer from "./components/CatFact/CatFactContainer";
import CatPicContainer from "./components/CatPic/CatPicContainer";

const App = (props) => {
    return (
        <div className='container d-flex mt-5'>
            <CatFactContainer />
            <CatPicContainer />
        </div>
    )
}

export default App;
