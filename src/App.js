import React from "react";
import { Route,BrowserRouter,Switch } from "react-router-dom";

import './App.css';


import HomePage from "./pages/homepage/homepage.component";


const HatsPage = () => {
    return(
        <div>
            <h1>HATS PAGE</h1>
        </div>
    )
}

function App() {
  return (
      <BrowserRouter>
          <div>
              <Switch>
                  <Route exact={true} path="/" component={HomePage} />
                  <Route path="/shop/hats" component={HatsPage}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
