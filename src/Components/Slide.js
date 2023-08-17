import {Carousel,Image} from 'react-bootstrap';
import {MDBBtn}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Slide() {
  const navigate=useNavigate();
  return (
    <Carousel id='home'>
    <Carousel.Item>

    <Image className="slide-img" src="https://www.ajantashoes.com/pub/media/sparsh/banner/image/a/j/ajanta_-_webbanner_design._-_imp_l_1.jpg" alt='Photo' />  
      <Carousel.Caption>
        {/* <h3 className='text' >"Welcome to Our Little Wonderland!"</h3>
        <p className='text'> "In the embrace of tiny arms, we find boundless joy.".</p> */}
        <MDBBtn className='w-20 mb-6' size='md' onClick={()=>{navigate('/men')}}>MEN</MDBBtn> &nbsp;
        <MDBBtn className='w-20 mb-6' size='md' onClick={()=>{navigate('/women')}}>WOMEN</MDBBtn>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
   
    <Image className="slide-img" src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg" alt='Photo' />
      <Carousel.Caption>
        {/* <h3 className='text'>  "Celebrating the Miracle of Life!"</h3>
        <p className='text'>   "Every coo, every cuddle, a reminder of life's purest miracles."</p> */}
        <MDBBtn className='w-20 mb-6' size='md' onClick={()=>{navigate('/men')}}>MEN</MDBBtn> &nbsp;
        <MDBBtn className='w-20 mb-6' size='md' onClick={()=>{navigate('/women')}}>WOMEN</MDBBtn>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
   
    <Image className="slide-img" src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Photo' />

      <Carousel.Caption>
        {/* <h3 className='text'> "Join Us on this Journey of Parenthood!"</h3>
        <p>
        "Together, we'll create memories that sparkle like stardust."
        </p> */}
        <MDBBtn className='w-20 mb-6' size='md' onClick={()=>{navigate('/men')}}>MEN</MDBBtn> &nbsp;
        <MDBBtn className='w-20 mb-6' size='md' onClick={()=>{navigate('/women')}}>WOMEN</MDBBtn>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}



export default Slide;