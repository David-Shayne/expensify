import React, { Component } from 'react';
import Accounts from './Accounts';
import History from './History';
import Transactions from './Transactions';

export class Tracker extends Component {
    render() {
        return (
            <div className="row ">
                <div className="col l6 m12 s12 offset-l3 ">
                    <div className="col l6 offset-l3 m6 offset-m3 s12">
                        <Accounts />
                        <History />
                        <Transactions />
                    </div>
                </div>
            </div>
        );
    }
}

export default Tracker;
