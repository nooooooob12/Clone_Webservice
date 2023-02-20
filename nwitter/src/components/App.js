import { useState } from "react";
import AppRouters from "components/Router";
import {authService} from "fbase"

//모든 로직을 다룰 공간

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); // useState의 기본값에 firebase.auth()를 사용해 유저가 로그인을 했는지, 안했는지의 여부를 체크하려고 함.
  return (
    <>
    <AppRouters isLoggedIn={isLoggedIn}/>
    <footer>&copy; Nwitter {new Date().getFullYear()}Nwitter</footer>
    </>
  );
}

export default App;
