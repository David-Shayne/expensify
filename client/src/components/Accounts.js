import React, { Component } from 'react';
import '../styles/Overview.css';
import '../styles/helper.css';

export class Accounts extends Component {
    render() {
        return (
            <div className="accounts m-bottom">
                <h5>Accounts</h5>
                <div className="blue-text text-darken-1 div-box col">
                    <p>Cash</p> <span>$16,854</span>
                </div>
                <div className="div-box col">
                    <p>Credit Debt</p> <span>-$3,120</span>
                </div>
            </div>
        );
    }
}

export default Accounts;
