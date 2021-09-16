import products1 from '../images/products1.jpg';
import products2 from '../images/products2.jpg';
import products3 from '../images/products3.jpg';
import products4 from '../images/products4.jpg';
import products5 from '../images/products5.jpg';

const products = [
    {
        id: 2,
        name:"Concrete Black Chair",
        price:199,
        desc: "Comfortable chair crafted from sturdy mahogany base and ergonomically designed black plastic rest.",
        src: `${products2}`,
        quantity: 1,
    },
    {
        id: 3,
        name:"Gray Cushion Chair",
        price:299,
        desc: "Comfortable core consisting of the softest mattress all securely placed on a strong mahogany base.",
        src: `${products3}`,
        quantity: 1,
    },
    {
        id: 4,
        name:"Elegant White Chair",
        price:599,
        desc: "Soft mattress combined with light feathers all fashioned into an elegant resting chair perfect for any home.",
        src: `${products4}`,
        quantity: 1,
    },
    {
        id: 5,
        name:"Gray Cushion Rotator",
        price:399,
        desc: "Supported by a strong mahogony base, this chair fashioned from a comfortable mattress is perfect for any office.",
        src: `${products5}`,
        quantity: 1,
    },
]

function Products({cart, setCart}) {

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

  return (
    <div className="home">
      <div className="title">Our Products</div>

      <div className="row p-0">
        <img src={products1} className="imageFull img__img" alt="p1"  />
        {products.map((x) => {
            return (<div className="col-sm-6 p-0">
                <div class="img__wrap">
                  <img src={x.src} className="imageFull img__img" alt="p1"  />
                  <p class="img__description">{x.name} | ${x.price}
                    <span style={{fontSize:"15px"}}>{x.desc}</span>
                    <button onClick={() => appendItem(x)}className="buttonInvert">Purchase</button>
                  </p>
                </div>
            </div>
            );
        })}
      </div>
    </div>
  );
}

export default Products;
