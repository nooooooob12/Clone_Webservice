import { authService } from "fbase";
import React from "react";

const Profile = () => {
    const onLogOutClick = () => authService.signOut();
    return( 
    <>
        <button onClick={onLogOutClick}>LogOut</button>
    </>
)
}
export default Profile;