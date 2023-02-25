import {React} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Navigation from './Navigation';

const AppRouters =({isLoggedIn})=> {
    return(
        <Routes>
            {isLoggedIn && <Route path="/" element={<Navigation/>}></Route>}
            {isLoggedIn ? (
                    <>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    </>
                ):(
                    <>
                    <Route path="/" element={<Auth/>}></Route>
                    </>
                )}
        </Routes>
    )
}
export default AppRouters;