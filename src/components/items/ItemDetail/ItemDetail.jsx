import { useState, useContext } from "react";
import { context } from "../../CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({item}) {

    const [ counter, setCounter] = useState();
    const { addItem } = useContext(context);

    // const onAdd = (counter) => {
    //     const itemToCart = {
    //         ...item,
    //         cantidad: counter
    //     }
    //     addItem(itemToCart);
    // }

    return(
        <>
            <h1>Detalles del producto</h1>
            <div className="p-3 border bg-light" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <ItemCount 
                    // onAdd={onAdd} 
                    initial={1} 
                    // setCantidad={setCounter}
                    stock={item.stock}
                    item={item}
                >
                </ItemCount>
                <Link to={"/cart"}>Ver carrito</Link>             
            </div>
        </>
    );
};
export default ItemDetail;