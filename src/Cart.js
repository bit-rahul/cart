import React, { Component } from 'react';
import CartItem from './CartItem';

export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 9999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 3
                }
            ]
        }
        // this.testing();
    }

    handleQty = (product, val) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        if (val === "inc")
            products[index].qty += 1;
        else if (val === "dec")
            products[index].qty = products[index].qty < 1 ? 0 : products[index].qty - 1;
        this.setState({ products });
    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products: items
        })
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return (
                            <CartItem
                                product={product}
                                key={product.id}
                                handleIncreaseQty={this.handleQty}
                                handleDecreaseQty={this.handleQty}
                                handleDeleteProduct={this.handleDeleteProduct}
                            />
                        )
                    })
                }
            </div>
        )
    }
}