import './Hero.css'
import Video from '../../video/Dynamite2.mp4';
import Image1 from '../../images/Dynamite.jpeg';
import Image2 from '../../images/Dynamite.jpg';
import Image3 from '../../images/Dynamite2.jpg';

const Hero = ()=> {
  return (
    <>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active" data-bs-interval="10000">
      <video src={Video} autoPlay muted loop className="d-block w-100 image-custom" alt="..."/>
    </div>
    <div className="carousel-item " data-bs-interval="10000">
      <img src={Image1} className="d-block w-100 image-custom" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src={Image2} className="d-block w-100 image-custom" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src={Image3} className="d-block w-100 image-custom" alt="..."/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>

  );
}

export default Hero;
