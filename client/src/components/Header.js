import React, { Component } from 'react';
import '../styles/helper.css';
import { connect } from 'react-redux';

export class Header extends Component {
    render() {
        return (
            <nav className="m-bottom">
                <div className="nav-wrapper blue darken-3">
                    <div className="container">
                        <a
                            href="/"
                            className="brand-logo"
                            style={{ fontFamily: 'MuseoModerno' }}
                        >
                            Expensify
                        </a>
                        <ul
                            id="nav-mobile"
                            className="right hide-on-med-and-down"
                        >
                            <li className="active">
                                <a href="/">Tracker</a>
                            </li>

                            <li>
                                <a href="www.davidshayne.co.za">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStoreToProps = store => ({
    items: store.history.items
});
export default connect(mapStoreToProps, null)(Header);
