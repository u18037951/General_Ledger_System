import { useState, useEffect } from 'react';
import './../css/App.css';
import Login from './Login';
import SignIn from './SignIn';
import Home from './Dashboard';
import SideBar from './Employee/SideBar'
import firebase  from './Auth/Authentication';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Dashboard";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        })
    }, [])

    return (
        <div className="app"  >
            {user ? <Home user={user} /> : <SignIn/>}
        </div>
    );
}

export default App;