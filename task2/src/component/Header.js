import React from "react";

class Header extends React.Component{
    render(){
        return(
            <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        )
    }
}

export default Header;