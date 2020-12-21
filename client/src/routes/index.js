import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from '../components/Detail';
import Results from '../components/Results';
import Searchbar from '../components/Searchbar'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path='/' component={Searchbar} />
            <Route path='/items' component={Results} exact/>
            <Route path='/items/:id' component={Detail} exact/>
        </BrowserRouter>
        
    )
}

export default Routes;