import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
this.state={

    }
    }

    render() {
        return (
            <div>
            <header>
               <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href=""><h4>CodeDaily</h4></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <Link to=""><a class="nav-item nav-link ">To Do</a></Link>
    <Link to="/done"> <a class="nav-item nav-link" >Done</a></Link>
    <Link to="/All"> <a class="nav-item nav-link" href="All">All</a></Link>
    </div>
  </div>
</nav>
            </header>
            <br/>
           
            </div>
        );
    }
}



export default HeaderComponent;