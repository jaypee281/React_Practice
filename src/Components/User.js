import React from 'react';
import {Link} from 'react-router-dom'
function User(props){
        const data=props.data
        return<div className="header">
            <p>Welcome {data.currentUser.userName}</p>
            <Link to="/"> <button>Logout </button></Link> 
            <Link to="/UserSettings"> <button>User Settings </button></Link> 
        </div>
    }

export default User;