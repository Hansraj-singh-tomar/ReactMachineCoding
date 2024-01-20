import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    async function fetchProduct() {
        let result = await fetch(
            `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
        );
        result = await result.json();
        console.log(result);
        if (result && result.products) {
            setProducts(result.products);
            setTotalPage(result.total / 10);
        }
    }

    function setpageHandler(selectedPage) {
        if (selectedPage >= 1 && selectedPage <= totalPage) {
            setPage(selectedPage);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [page]);

    return (
        <div className="App">
            {products.length > 0 && (
                <div className="products">
                    {products.map((item, i) => {
                        return (
                            <span key={item.id} className="products__single">
                                <img src={item.thumbnail} alt={item.title} />
                                <span>{item.title}</span>
                            </span>
                        );
                    })}
                </div>
            )}
            {products.length > 0 && (
                <div className="pagination">
                    <span
                        className={page > 1 ? "" : "pagination__disabled"}
                        onClick={() => setPage(page - 1)}
                    >
                        ◀
                    </span>

                    {[...Array(totalPage)].map((_, i) => {
                        return (
                            <span
                                key={i}
                                onClick={() => setpageHandler(i + 1)}
                                className={page === i + 1 ? "pagination__selected" : ""}
                            >
                                {i + 1}
                            </span>
                        );
                    })}

                    <span
                        className={page < totalPage ? "" : "pagination__disabled"}
                        onClick={() => setPage(page + 1)}
                    >
                        ▶
                    </span>
                </div>
            )}
        </div>
    );
}


// css part
// .App {
//     font - family: sans - serif;
// }

// .products {
//     padding: 0;
//     margin: 10px;
//     display: grid;
//     gap: 20px;
//     grid - template - columns: 1fr 1fr 1fr;
// }

// .products__single {
//     height: 250px;
//     background - color: gray;
//     padding: 20px;
//     text - align: center;
//     cursor: pointer;
//     color: #fff;
//     border - radius: 3px;
// }

// img {
//     width: 100 %;
//     height: 95 %;
//     object - fit: cover;
//     margin - bottom: 3px;
// }

// .pagination {
//     display: flex;
//     justify - content: center;
//     margin - top: 20px;
// }

// .pagination span {
//     padding: 12px;
//     border: 1px solid black;
//     cursor: pointer;
// }

// .pagination__selected {
//     background - color: gray;
// }

// .pagination__disabled {
//     opacity: 0;
// }
