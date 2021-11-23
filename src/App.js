
import './App.css';
import Header from './components/Header/Header';
import SlideImages from './components/SlideImages';
import CardSlider from './components/CardSlider';
// import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
// import SingleMovie from './components/SingleMovie';
import SingleMovieFetch from './components/SingleMovieFetch';
import Registration from './components/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
 

    function App() {
    return (
          <Router>
            <div>
            <Header/>  
            <Switch>
            
              <Route exact  path="/movies">
                <AllMoviesFetch />
              </Route>
              <Route exact  path="/movies/:movid">
                <SingleMovieFetch/>
              </Route>
              <Route exact  path="/Register">
                <Registration/>
              </Route>
              <Route exact path="/">
              <SlideImages/>
            <CardSlider/>
              </Route>
            </Switch>
            
          </div>
          </Router>
    );
    }

export default App;
