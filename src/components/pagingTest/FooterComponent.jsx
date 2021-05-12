import React, {Component} from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <br/>
                    <span className="text-muted">Footer 영역 </span><br/>
                    <span className="text-muted">Started 2020 </span>

                </footer>
            </div>
        );
    }
}

export default FooterComponent;