import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const { price, title, qty } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: "#777" }}>Rs {price}</div>
                    <div style={{ color: "#777" }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            onClick={() => this.props.handleIncreaseQty(this.props.product, "inc")}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/659/659892.svg"
                            onClick={() => this.props.handleDecreaseQty(this.props.product, "dec")}
                        />
                        <img
                            alt="delete" className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                            onClick={() => this.props.handleDeleteProduct(this.props.product.id)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: "#ccc"
    }
}
