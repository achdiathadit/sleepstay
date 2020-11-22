import React, { Component } from 'react';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import MostPopular from '../parts/MostPopular';
import Categories from '../parts/Categories';
import Testimony from '../parts/Testimony';
import Footer from '../parts/Footer';
import landingPage from '../json/landingPage.json';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPopular = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPopular={this.refMostPopular} data={landingPage.hero} />
        <div className='h-line'></div>
        <MostPopular
          refMostPopular={this.refMostPopular}
          data={landingPage.mostPopular}
        />
        <div className='h-line'></div>
        <Categories data={landingPage.categories} />
        <div className='h-line'></div>
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
