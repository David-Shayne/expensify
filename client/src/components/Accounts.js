import React, { Component } from 'react';
import '../styles/Overview.css';
import '../styles/helper.css';
import { connect } from 'react-redux';

export class Accounts extends Component {
    render() {
        return (
            <div className="accounts m-bottom">
                <h5>Accounts</h5>
                <div className="blue-text text-darken-1 div-box col">
                    <p>Cash</p> <span>R1,200</span>
                </div>
                <div className="div-box col">
                    <p>Credit Debt</p> <span>-R3120</span>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = store => ({
    total: store.history.total
});

export default connect(mapStoreToProps, null)(Accounts);
