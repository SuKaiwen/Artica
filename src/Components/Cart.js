function Cart({cart, setCart}) {

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

  return (
    <div className="home">
      <div className="title">My Cart</div>
      <div className="row">
        {cart.length < 1 ? ( <div className="col-sm-4">Cart is currently empty</div>) :
            <div className="col-sm-6" style={{maxWidth:"300px"}}>
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
        }
      </div>
      <button onClick={emptyCart}className="btn btn-danger" style={{marginTop:"50px"}}>Empty Cart</button>
    </div>
  );
}

export default Cart;
