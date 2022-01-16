/*
import {BrowserRouter,Route} from "react-router-dom";

import './App.css';
import Header from './Components/Header'
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from '@material-ui/core/styles';

function App() {

  const useStyles = makeStyles(() => ({

    App: {
      backgroundcolor : "#14161a",
      color: "white",
      minHeight:"100vh",
        
    },
  
  }));

  const classes = useStyles()

  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header />
      <Route path='/' component={Homepage} exact />
      <Route path='/coins/:id' component={CoinPage}/>  
    </div>
    </BrowserRouter>
  );
}

export default App;
*/




  
import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/Homepage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;