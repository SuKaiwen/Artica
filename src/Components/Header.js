import {Link} from 'react-router-dom';

function Header({cart}) {
  return (
    <div className="header">
      <Link className="link" to="/"><h5>Artica</h5></Link>
      <div style={{justifyContent:"space-between", width:"230px", display:'flex'}}>
          <Link className="link" to="/products"><p>Products</p></Link>
          <Link className="link" to="/cart"><p>Cart <span className="badge badge-primary">{`${cart.length}`}</span></p></Link>
          <Link className="link" to="/aboutus"><p>About Us</p></Link>
      </div>
    </div>
  );
}

export default Header;
