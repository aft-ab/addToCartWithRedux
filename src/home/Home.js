import { useState } from "react";
// import { ReactDOM } from "react-dom";
import { Data } from '../Data';
import './home.css';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD } from '../redux/actions/RegisterAction';



const Home = () => {
    const [mdata, setMdata] = useState(Data);
    // console.log(Data);

    const getState = useSelector((state) => state)
    console.log(getState);
    const dispatch = useDispatch();


    const send = (e) => {
        dispatch(ADD(e));
    }
    console.log(send, "44444444");


    return (

        <>
            {/* <a href="/ViewProduct"> view products </a> */}
            {/* <button href="/ViewProduct"> view products</button> */}

            <div className="c1>">



                {Data.map((item, id) => {
                    item.quantity = 1;

                    return (
                        <div className="c2" key={item.id}>

                            <img src={item.images[0]} className="CI" alt="cart" />
                            <div className="cO">
                                {item.title}
                                <br />
                                Rating: {item.rating}
                                <br />
                                Price : ₹ {item.price}
                            </div>

                            <button type="button" className="cB" onClick={() => send(item)}> Add to Cart</button>



                        </div>
                    )
                })}
            </div>
        </>

    );








};

export default Home;