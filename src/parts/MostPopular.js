import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from '../elements/Button';

export default function MostPopular(props) {
  // const pathImage = require.context('../assets/images/');

  return (
    <section className='card-box container' ref={props.refMostPopular}>
      <Fade bottom>
        <h4 className='mb-4 font-weight-semibold text-info'>Most popular</h4>
        <div className='container-grid'>
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpopular-${index}`}
                className={`item column-4${index === 0 ? ' row-2' : ' row-1'}`}
              >
                <Fade bottom delay={400 * index}>
                  <div className='card card-featured'>
                    <div className='tag h5 font-weight-semibold'>
                      ${item.price}{' '}
                      <span className='font-weight-normal'>
                        per {item.unit}
                      </span>
                    </div>
                    <figure className='img-wrapper'>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className='img-cover'
                      />
                    </figure>
                    <div className='meta-wrapper'>
                      <Button
                        type='link'
                        className='stretched-link d-block text-white'
                        href={`/properties/${item._id}`}
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
