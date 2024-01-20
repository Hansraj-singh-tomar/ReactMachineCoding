import "./styles.css";
import React, { useState } from "react";
export default function App() {
    const [products, setProducts] = useState([
        { id: 1, name: "blue shirt", quantity: 1 },
        { id: 2, name: "jeans", quantity: 1 }
    ]);

    // const [selectedProduct, setSelectedProdnuct] = useState({});
    const [selectedId, setSelectedId] = useState(null);

    let selectedProduct = products.find((p) => p.id === selectedId);

    const handleSelected = (id) => {
        // let product = products.find((p) => p.id === id);
        // setSelectedProdnuct(product);
        setSelectedId(id);
    };

    const increment = (id) => {
        setProducts((prev) => {
            return prev.map((product) => {
                if (product.id === id) {
                    return { ...product, quantity: product.quantity + 1 };
                } else {
                    return product;
                }
            });
        });
    };
    return (
        <div className="App">
            <h1>Product List</h1>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <span>{product.name}</span>
                        <button
                            style={{ margin: "10px" }}
                            onClick={() => handleSelected(product.id)}
                        >
                            Choose
                        </button>
                        <div>
                            <button style={{ margin: "10px" }}>-</button>
                            {product.quantity}
                            <button
                                style={{ margin: "10px" }}
                                onClick={() => increment(product.id)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                );
            })}
            <h1>Selected Item</h1>
            <span>{selectedProduct?.name}</span>
            <span style={{ margin: "10px" }}>{selectedProduct?.quantity}</span>
        </div>
    );
}
