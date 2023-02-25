import {React} from 'react';
import {HashRouter as Route, Routes,} from 'react-router-dom';

import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Navigation from './Navigation';

const AppRouters =({isLoggedIn})=> {
    return(
        <>
            {isLoggedIn && <Navigation/>}
         <Routes>
            {isLoggedIn ? (
            <Route exact path="/" element={ <Home/>}>
            </Route> ) :(
                 <Route exact path="/profile" element={<Profile/>}>
                </Route>
            )}
         </Routes>
         </>
    )
}
export default AppRouters;