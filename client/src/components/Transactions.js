import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import '../styles/Overview.css';
import '../styles/helper.css';

class Transactions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            value: 0,
            category: 'null'
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="transactions">
                <h5>Add Transaction</h5>
                <form className="col s12">
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input
                            required
                            type="text"
                            name="name"
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="value">Value</label>
                        <input
                            required
                            type="number"
                            name="value"
                            onChange={this.onChange}
                        />
                    </div>

                    <select
                        name="category"
                        onChange={this.onChange}
                        value={this.state.category}
                    >
                        <option value="null" disabled selected>
                            Choose a category
                        </option>
                        <option value="food">Food</option>
                        <option value="travel">Travel</option>
                        <option value="shopping">Shopping</option>
                        <option value="deposit">Deposit</option>
                    </select>
                    <button
                        className="waves-effect waves-light btn s-top"
                        type="submit"
                        onClick={e => {
                            e.preventDefault();
                            if (this.state.name && this.state.value !== 0) {
                                this.props.addItem({
                                    name: this.state.name,
                                    value: this.state.value,
                                    category: this.state.category
                                });
                            }
                        }}
                    >
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

const mapStoreToProps = store => ({
    items: store.history.items
});

export default connect(mapStoreToProps, { addItem })(Transactions);
