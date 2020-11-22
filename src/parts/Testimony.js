import React from 'react';
import Fade from 'react-reveal/Fade';

import imageTestimonial from '../assets/images/img/img-testimonial.png';
import imageTestimonialFrame from '../assets/images/img/img-testimonial-frame.png';
import Star from '../elements/Star';
import Button from '../elements/Button';

export default function Testimony({ data }) {
  return (
    <Fade bottom>
      <section className='section-lg container'>
        <div className='row align-items-center'>
          <div className='col-auto' style={{ marginRight: 20 }}>
            <div
              className='testimonial-hero'
              style={{ margin: `25px 0 0 25px` }}
            >
              <img
                src={imageTestimonial}
                alt='Testimonial'
                className='position-absolute'
                style={{ zIndex: 1 }}
              />
              <img
                src={imageTestimonialFrame}
                alt='Testimonial frame'
                className='position-absolute'
                style={{ margin: `-25px 0 0 -25px` }}
              />
            </div>
          </div>
          <div className='col-5'>
            <h4 className='text-info' style={{ marginBottom: 30 }}>
              {data.name}
            </h4>
            <Star value={data.rate} width={40} height={35} spacing={4} />
            <h3 className='testimonial-content text-info font-weight-medium'>
              "{data.content}"
            </h3>
            <span className='h5 mb-2 font-weight-normal text-dark'>
              {data.customerName}, {data.customerCountry}
            </span>
            <div>
              <Button
                className='btn btn-secondary btn-story'
                hasShadow
                isPrimary
                type='link'
                href={`/testimonial/${data._id}`}
              >
                Read story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
