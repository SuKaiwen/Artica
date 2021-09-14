import livingRoom from '../images/room.jpg';
import livingRoom2 from '../images/room2.jpg';
import livingRoom3 from '../images/room3.jpg';
import livingRoom4 from '../images/room4.jpg';
import home from '../images/home.jpg';

function Home() {
  return (
    <div className="home">
      <div className="title">
        <hr></hr>
        Artica is an interior modelling and furniture design firm based in Auckland, New Zealand.
        <hr></hr>
      </div>
      <img className="imageFull" src={home} alt="room" />
      <div className="title">Our work</div>
      <p className="content">Our practice spans from years of interior design of existing buildings to the complete planning and design of new apartments and public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships through interior comfort and furniture.</p>
      <div className="row">
        <div className="col-sm">
            <img className="imageFull" src={livingRoom} alt="room" />
            <p>Modern Living Room Design</p>
        </div>
        <div className="col-sm">
            <img className="imageFull" src={livingRoom2} alt="room2" />
            <p>Master Bedroom Design</p>
        </div>
        <div class="w-100"></div>
        <div className="col-sm">
            <img className="imageFull" src={livingRoom3} alt="room3" />
            <p>Dark Oak and Elegant White Design</p>
        </div>
        <div className="col-sm">
            <img className="imageFull" src={livingRoom4} alt="room2" />
            <p>Warm Red Design</p>
        </div>
      </div>
      <div className="title">Contact Us</div>
      <p className="content">Lets make magic happen! We are always looking to improve the homes of our clients. Please get in touch and one of our designers will contact you about beginning the design process.</p>
      <button className="button">Contact Us</button>
    </div>
  );
}

export default Home;
