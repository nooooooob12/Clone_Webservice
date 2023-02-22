import {React} from 'react';
import {HashRouter as Router, Route, Routes,} from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Navigation from './Navigation';

const AppRouters =({isLoggedIn})=> {
    return(
        <Router>
            {isLoggedIn && <Navigation/>}
         <Routes>
            {isLoggedIn ? (
            <Route exact path="/">
                <Home/>
            </Route> ) :(
                 <Route exact path="/profile">
                    <Profile/>
                </Route>
            )}
         </Routes>
        </Router>
    )
}
export default AppRouters;