import { useEffect, useState } from "react";



const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();


export function useAuthentication(){
    // Initialize the hook
const [authenticated, setAuthenticated] = useState('Loading')

function Login(){
auth.signInWithPopup(provider);
}
function logout(){
    auth
    .signOut()
    .then(function(){
        console.log("Signout Successfully")
    })
    .catch(function(error){
        console.log("An error happened.")
    })
}

// this empty array is run only once when the component will mount
useEffect(() => {
    auth.onAuthStateChanged(function(user){
       // console.log(user);
       if(user){
           setAuthenticated(user);
       }
       else{
           setAuthenticated();
       }
    
        }, function(error){
          console.log(error);
          
        });
}, []);

    return {Login, logout, loggedIn: authenticated}
}