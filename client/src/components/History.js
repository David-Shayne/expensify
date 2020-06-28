import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Overview.css';
import '../styles/helper.css';

class History extends Component {
    render() {
        const items = this.props.items.map(({ name, value, category }) => {
            let icon =
                category === 'food'
                    ? 'fastfood'
                    : category === 'travel'
                    ? 'directions_car'
                    : category === 'deposit'
                    ? 'attach_money'
                    : category === 'shopping'
                    ? 'shopping_cart'
                    : '';

            let color =
                category === 'food'
                    ? 'blue'
                    : category === 'travel'
                    ? 'orange'
                    : category === 'deposit'
                    ? 'green'
                    : category === 'shopping'
                    ? 'pink'
                    : '';
            return (
                <div
                    className={`item ${
                        value > 0 ? 'add' : 'minus'
                    } card hoverable div-box`}
                    style={{ paddingLeft: '0', overflow: 'hidden' }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <i className={`material-icons icon ${color}`}>{icon}</i>
                        <p>{name}</p>
                    </div>

                    <span>
                        {value > 0 ? '+' : ''}
                        {value}
                    </span>
                </div>
            );
        });

        return (
            <div className="history m-bottom">
                <h5>History</h5>
                <div className="divider s-bottom div-box"></div>
                <div className="overflow-history">{items}</div>
            </div>
        );
    }
}

const mapStoreToProps = store => ({
    items: store.history.items
});

export default connect(mapStoreToProps, null)(History);
