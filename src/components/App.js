import React from 'react';
import { BrowserRouter , Route  } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/Streamlist';
import Streamshow from './streams/StreamShow';

import Header from './Header';


const App = () => {
    return(
        <div className= "ui container">
            <BrowserRouter>
                <div>
                    <Header /> 
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={Streamshow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;


//<Header /> hbe 15 line e but amra header er vitore link use korsi seijonne header <BrowserRouter /> er vitore hbe