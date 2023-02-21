import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    } from 'firebase/auth';
import React, { useState } from "react";

const Auth = () =>{ 

    // 동적 form을 만들기 위한 react Hook UseState 활용
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newAccount,setNewAccount] = useState(true);

    // 이벤트 동작 함수 만들기
    const onChange = (event) => {
        const {target:{name,value},
        } = event;
        if(name === 'email') {
            setEmail(value);
        } else if (name === 'password'){
            setPassword(value);
        }
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            let data;
            const auth = getAuth();
            if(newAccount) {
                //Create account
                data = await createUserWithEmailAndPassword(auth,email, password);
            }else{
                // login
                data = await signInWithEmailAndPassword(auth,email, password);
            }
            console.log(data)
        } catch(err) {
            console.log(err)
        }
    };
return( 
<div>
    <form onSubmit={onSubmit}>
        <input name="email"
        type="email" placeholder="Email"
        required 
        defalutvalue={email} onChange={onChange} />

      <input name="Password"
      type="password" placeholder="Password" 
      required 
      defalutvalue={password} onChange={onChange} />

        <input type="submit" defalutvalue={newAccount ? "Create Account" : "LogIn"}/>
    </form>
    <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
    </div>
</div>
)
}
export default Auth;