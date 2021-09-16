function Cart({cart, setCart}) {

  const emptyCart = () => {
    setCart([]);
  }

  return (
    <div className="home">
      <div className="title">My Cart</div>
      <div className="row">
        {cart.length < 1 ? ( <div className="col-sm-4">Cart is currently empty</div>) :
            <div className="col-sm-5">
              {cart.map((x) => {
                return(
                    <div>
                        <img src={x.src} className="roundedImage" alt="img" />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p>{x.name}</p>
                            <p>${x.price}</p>
                        </div>
                        <p>Quantity: {x.quantity}</p>
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
