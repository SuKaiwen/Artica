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
    },
    {
        id: 3,
        name:"Gray Cushion Chair",
        price:299,
        desc: "Comfortable core consisting of the softest mattress all securely placed on a strong mahogany base.",
        src: `${products3}`,
    },
    {
        id: 4,
        name:"Elegant White Chair",
        price:599,
        desc: "Soft mattress combined with light feathers all fashioned into an elegant resting chair perfect for any home.",
        src: `${products4}`,
    },
    {
        id: 5,
        name:"Gray Cushion Rotator",
        price:399,
        desc: "Supported by a strong mahogony base, this chair fashioned from a comfortable mattress is perfect for any office.",
        src: `${products5}`,
    },
]

function Products() {
  return (
    <div className="home">
      <div className="title">Our Products</div>

      <div className="row p-0">
        <div class="img__wrap">
          <img src={products1} className="imageFull img__img" alt="p1"  />
          <p class="img__description">Oak Woodland Collection ($399)
            <button className="buttonInvert">Purchase</button>
          </p>
        </div>
        {products.map((x) => {
            return (<div className="col-sm-6 p-0">
                <div class="img__wrap">
                  <img src={x.src} className="imageFull img__img" alt="p1"  />
                  <p class="img__description">{x.name} | ${x.price}
                    <button className="buttonInvert">Purchase</button>
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
