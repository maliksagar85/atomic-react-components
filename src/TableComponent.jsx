import React from 'react';
import _ from 'lodash';

class TableComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stories: []
        }
        this.page = 0;
       // this.getDataFromApi();
    } 

    render() {
       
        return( <footer className="footer">
            <div>
                <div className="footer-heading">
                    Privacy & Cookies
                </div>
                <div>
                    We use cookies to give you the best experience on our website. By continuing, you're agreeing to our use of cookies. We have recently updated our policy. <a href="#">Learn More</a>
                    <button>
                        Accept & Continue -> 
                    </button>
                </div>
            </div>
        </footer>
        );
    
    }
}

export default TableComponent;