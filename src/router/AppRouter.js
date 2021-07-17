import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import MoviePage from '../pages/MoviePage';
import About from '../pages/About';
import Favorite from '../pages/Favorite';
import Search from '../pages/Search';
import Footer from '../components/Footer';
import PageNotFound from '../pages/PageNotFound';
import '../scss/styles.scss';
import {APP_FOLDER_NAME} from '../globals/globalVariables';


function AppRouter() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  return (
    <div className="pageContainer">
      <Router basename={APP_FOLDER_NAME}>
        <Header />
          <Switch>
            <Route path='/' exact>
              <Home sort={'/movie/popular?'} />
            </Route>

            <Route path={'/sort/popular'}>
              <Home sort={'/discover/movie?sort_by=popularity.desc&'} />
            </Route>
            <Route path={'/sort/top-rated'}>
              <Home sort={'/movie/top_rated?'} />
            </Route>
            <Route path={'/sort/now-playing'}>
              <Home sort={`/discover/movie?sort_by=popularity.desc&primary_release_date.lte=${today}&`} />
            </Route>
            <Route path={'/sort/upcoming'}>
              <Home sort={`/discover/movie?sort_by=popularity.desc&primary_release_date.gte=${today}&`} />
            </Route>
            <Route path="/movie/:movieId"><MoviePage /></Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/favorite'>
              <Favorite sort={'/discover/movie?sort_by=popularity.desc&'} />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
          <Footer yyyy={yyyy}/>
      </Router>
    </div>
  );
}

export default AppRouter;
