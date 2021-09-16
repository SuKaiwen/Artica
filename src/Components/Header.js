import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function Header({cart}) {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotal();
  }, [cart])

  const getTotal = () => {
    let x = 0;
    for (var i = 0; i < cart.length; i++){
        x = x + cart[i].quantity;
    }
    console.log(x);
    setTotal(x);
  }

  return (
    <div className="header">
      <Link className="link" to="/"><h5>Artica</h5></Link>
      <div style={{justifyContent:"space-between", width:"230px", display:'flex'}}>
          <Link className="link" to="/products"><p>Products</p></Link>
          <Link className="link" to="/cart"><p>Cart <span className="badge badge-primary">{`${total}`}</span></p></Link>
          <Link className="link" to="/aboutus"><p>About Us</p></Link>
      </div>
    </div>
  );
}

export default Header;
