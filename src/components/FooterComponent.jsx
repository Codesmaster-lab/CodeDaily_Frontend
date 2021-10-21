import React, { Component } from 'react';


class FooterComponent extends Component {
    constructor(props) {
        super(props);
          this.state={

          }
    }


    render() {
        return (
            <footer >
            <div class="card text-center">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">Codesmaster</h5>
              <p class="card-text"> Increase your potential with CodeDaily.</p>
              <a href="https://github.com/Codesmaster-lab" class="btn btn-primary">Follow me</a>
            </div>
            <div class="card-footer text-muted">
                   Insta , fb  , github        
            </div>
          </div>
          </footer>
        );
    }
}


export default FooterComponent;
