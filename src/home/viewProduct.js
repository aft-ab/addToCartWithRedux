import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import { ADD} from '../redux/actions/RegisterAction'



const ViewProduct = () => {
  const getState = useSelector((state)=>state);
 

  console.log(getState);
  const dispatch = useDispatch();

  
  
  const send = (e)=>{
    dispatch(ADD(e));
  }
  


  return (
<>
{getState.length === 0 ?
  (
              <div className='v'>
               <h1>Your basket is empty</h1>
                  </div>

  ) : ( //if else 
  <>

      <h1 style={{paddingLeft:"600px"}}> Your basket Is Here </h1>
        <div className="v1">

    <table>

   <th>Product Image</th>
   <th> Product title</th> 
   <th> Product Price</th>
      <th>Remove</th>
      <th>Quantity</th>

<br/>
<br/>
     {getState.map((item) => {

       return (
        <tr key={item}>
             <td><img src={item.images[0]} alt="cart" width="180" height="180"/></td>
              <td> {item.title}</td>           
              <td> {item.price}</td>
            {/* <p> <strong>Amount: Rs.</strong>. {item.price * item.quantity}</p>
            <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}> */}


</tr>

                    );
           })}
  </table>


  
        </div>
    </>)
    }
  </>);
};

export default ViewProduct;
