import React, { Component } from 'react'

export default class CartItem extends Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        // this.testing();
    }

    // testing() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         this.setState({ qty: this.state.qty + 100 })
    //         this.setState({ qty: this.state.qty + 100 })
    //         this.setState({ qty: this.state.qty + 100 })

    //         console.log('state', this.state);
    //     })
    // }

    increaseQuantity = () => {
        // let { qty } = this.state;
        // this.setState({
        //     qty: qty + 1
        // })
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        })
    }

    decreaseQuantity = () => {
        // let { qty } = this.state;
        this.setState((prevState) => {
            return {
                qty: prevState.qty === 0 ? 0 : prevState.qty - 1
            }
        })
    }

    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: "#777" }}>{price}</div>
                    <div style={{ color: "#777" }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/659/659892.svg"
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            alt="delete" className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
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
