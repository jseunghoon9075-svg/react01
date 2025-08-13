import { ThemeProvider } from 'styled-components';
import './App.css';
import C from './docs/context/basic/C';
import CharContainer from './docs/context/basic/CharContainer';
import Animals from './docs/context/expert/Animals';
import { AnimalsProvider } from './docs/context/expert/animalsContext';
import ParentContainer from './docs/context/normal/ParentContainer';
import Counter from './docs/redux/basic/Counter';
import FontChanger from './docs/redux/normal/FontChanger';
import Styled10 from './docs/styled/Styled10';
import MainContainer from './pages/main/MainContainer';
import { Route, Router, RouterProvider, Routes } from 'react-router-dom'
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import router from './routes/router';


function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
