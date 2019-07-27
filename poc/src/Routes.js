
import React from 'react';
import {BrowserRouter, Route,  Switch} from 'react-router-dom';
import Form from './Form.js';
import Show from './Show.js';
import Update from './Update.js';
import Delete from './Delete.js';
import Create from './Create.js';




const Routes = () => (
<BrowserRouter >
<Switch>
<Route  path="/" exact component={Form}/>
<Route   path="/show" component={Show}/>
<Route path ="/up" component={Update}/>
<Route path="/del" component={Delete}/>
<Route path="/cre"  component={Create}/>

</Switch>
</BrowserRouter>
);
export default Routes;
