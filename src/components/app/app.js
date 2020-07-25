import React from 'react'
import Apartaments from '../apartaments/apartaments'
import Header from './../header/header'

class App extends React.Component {
    
    render(){
        return(
            <React.Fragment>
                <Header />
                <Apartaments />
            </React.Fragment>
        )
    }
}

export default App;