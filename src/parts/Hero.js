import React from 'react';
import Fade from 'react-reveal/Fade';

import imageHero from '../assets/images/img/img-hero.png';
import imageHeroFrame from '../assets/images/img/img-hero-frame.png';
import iconTravelers from '../assets/images/icon/icon_travelers.svg';
import iconTouristSpots from '../assets/images/icon/icon_tourist_spots.svg';
import iconCities from '../assets/images/icon/icon_cities.svg';
import Button from '../elements/Button';
import formatNumber from '../utils/formatNumber';

export default function Hero(props) {
  function showMostPopular() {
    window.scrollTo({
      top: props.refMostPopular.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    <Fade bottom>
      <section className='hero container'>
        <div className='row align-items-center'>
          {/* Left column */}
          <div className='col-auto' style={{ width: 520 }}>
            <h3 className='tagline mb-3 font-weight-bold text-info'>
              Find your next best place
              <br />
              to sleep and stay
            </h3>
            <p className='h5 mb-4 font-weight-normal text-dark'>
              We have the best places for you to stay <br />
              as you enjoy the best moment with your family.
            </p>
            <Button
              className='btn btn-secondary btn-cta'
              hasShadow
              isPrimary
              onClick={showMostPopular}
            >
              Show me
            </Button>

            <div className='row mt-5'>
              <div className='statistic col-auto'>
                <img
                  src={iconTravelers}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h5 className='mt-3 font-weight-semibold text-info'>
                  {formatNumber(props.data.travelers)}{' '}
                  <span className='font-weight-normal text-dark'>
                    Travelers
                  </span>
                </h5>
              </div>

              <div className='statistic col-auto'>
                <img
                  src={iconTouristSpots}
                  alt={`${props.data.touristSpots} Tourist spots`}
                />
                <h5 className='mt-3 font-weight-semibold text-info'>
                  {formatNumber(props.data.touristSpots)}{' '}
                  <span className='font-weight-normal text-dark'>
                    Tourist spots
                  </span>
                </h5>
              </div>

              <div className='col-auto'>
                <img src={iconCities} alt={`${props.data.cities} Cities`} />
                <h5 className='mt-3 font-weight-semibold text-info'>
                  {formatNumber(props.data.cities)}{' '}
                  <span className='font-weight-normal text-dark'>Cities</span>
                </h5>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className='hero-pic col-6'>
            <div style={{ width: 555, height: 310 }}>
              <img
                src={imageHero}
                alt='Happy family'
                className='position-absolute'
                style={{
                  width: 530,
                  height: 363,
                  margin: '-25px 0 0 -25px',
                  zIndex: 1,
                }}
              />
              <img
                src={imageHeroFrame}
                alt='Frame'
                className='position-absolute'
                style={{ width: 530, height: 363, margin: '0 -20px -20px 0' }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
