import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from './store/Store';
const store = new Store();
export const StoreContext = React.createContext();
import Home from "./routes/Home";
import Results from "./routes/Results";
import Restaurant from "./routes/Restaurant";

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />}></Route>
        <Route path="/results" element={< Results />}></Route>
        <Route path="/restaurant/:id" element={<Restaurant />} exact></Route>
      </Routes>
    </BrowserRouter>
  </StoreContext.Provider >,
  document.getElementById('root')
);
