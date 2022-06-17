import React from 'react'
import { Routes,Route } from "react-router-dom";
import {Header} from './components/header'
import { Cart } from './pages/Cart';
import { Main } from './pages/Main'
import NotFound from './pages/NotFound';


export const SearchContext = React.createContext()


function App() {
  const [searchValue, setSearchValue] = React.useState('')
  
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={ <Main searchValue={searchValue}/>} />
              <Route path='cart' element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

