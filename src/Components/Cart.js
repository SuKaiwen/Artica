import React, {useState, useEffect} from 'react';

function Cart({cart, setCart}) {

  const [total, setTotal] = useState(0);

  const emptyCart = () => {
    setCart([]);
  }

  const appendItem = (item) => {
      console.log(cart);
      var temp = [...cart];
      if(cart.filter(e => e.id === item.id).length > 0){
          let updated = temp.find(({id}) => id === item.id);
          updated.quantity = updated.quantity + 1;
      }else{
          temp.push(item);
      }
      setCart(temp);
    }

  const removeItem = (item) => {
    console.log(cart);
    var temp = [...cart];
    if(cart.filter(e => e.id === item.id).length > 0){
        let updated = temp.find(({id}) => id === item.id);
        updated.quantity = updated.quantity - 1;
        if(updated.quantity < 1){
            var x = cart.filter(x => x.id !== updated.id);
            setCart(x);
            return;
        }
    }else{
        return;
    }
    setCart(temp);
  }

  const findTotal = () => {
    var x = 0
    for(var i = 0; i < cart.length; i++){
        x = x + (cart[i].price * cart[i].quantity);
    }
    console.log(x);
    setTotal(x);
  }

  useEffect(() => {
    findTotal();
  }, [cart])

  return (
    <div className="home">
      <div className="title">My Cart</div>
      <div className="row" style={{margin:"auto", justifyContent:"space-between"}}>
        {cart.length < 1 ? ( <div className="col-sm-4">Your cart is currently empty</div>) :
            <>
            <div className="col-sm-4" style={{maxWidth:"300px"}}>
              {cart.map((x) => {
                return(
                    <div style={{textAlign:"center",  marginTop:"30px"}}>
                        <hr></hr>
                        <img src={x.src} className="roundedImage" alt="img" />
                        <p>{x.name}</p>
                        <p>${x.price}</p>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <button onClick={()=>removeItem(x)}className="btn btn-danger">-</button>
                            <p>Quantity: {x.quantity} </p>
                            <button onClick={()=>appendItem(x)}className="btn btn-success">+</button>
                        </div>
                    </div>
                )
              })}
            </div>
            <div className="col-sm-4">
                <h1>Your balance: </h1>
                {cart.map((x) => {
                    return(
                        <>
                            <hr />
                            <p>{x.name} x{x.quantity}</p>
                            <p>${x.price * x.quantity}</p>
                            <hr />
                        </>
                    )
                })
                }
                <h5>Total: ${total}</h5>
            </div>
            </>
        }

      </div>
      <button onClick={emptyCart}className="btn btn-danger" style={{marginTop:"50px"}}>Empty Cart</button>
    </div>
  );
}

export default Cart;
