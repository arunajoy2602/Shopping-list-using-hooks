import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header';
import Lists from './Lists';
import List from './List';
import Form from './Form';
import GlobalContext from '../Context/GlobalContext';
// import ListsContextProvider, { ListsContext } from '../Context/ListsContextProvider';
// import ItemsContextProvider, { ItemsContext } from '../Context/ItemsContextProvider';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <GlobalContext>
        <Routes>
          <Route path='/' element={<Lists />} />
          <Route path='/list/:id/new' element={<Form />} />
          <Route path='/list/:id' element={<List />} />
        </Routes>
      </GlobalContext>
    </AppWrapper>
  </>
);

export default App;
