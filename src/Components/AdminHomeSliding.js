import React from 'react'
import {Carousel,Image} from 'react-bootstrap';
// import {MDBBtn}
// from 'mdb-react-ui-kit';

const AdminHomeSliding = () => {
  return (
    <div>
          <Carousel id='home'>
    <Carousel.Item>

    <Image className="slide-img-admin" src="https://www.neighbor.com/storage-blog/wp-content/uploads/2020/03/A-Guide-on-How-to-Pack-Shoes-for-Moving-Featured-Image-1-scaled.jpg" alt='Photo' />  
      <Carousel.Caption>
  
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
   
    <Image className="slide-img-admin" src="https://images.pexels.com/photos/7289707/pexels-photo-7289707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Photo' />
      <Carousel.Caption>

     
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
   
    <Image className="slide-img-admin" src="https://images.pexels.com/photos/7289708/pexels-photo-7289708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Photo' />

      <Carousel.Caption>
       
 
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default AdminHomeSliding