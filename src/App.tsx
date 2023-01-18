import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CarouselOfPictures from './components/PhotoGallery/Carousel';
import ExampleCarousel from './components/PhotoGallery/ExampleCarousel';
import SiteNav from './components/pages/SiteNav';


function App() {
  return (
    <div className="App">
    <SiteNav />
    <CarouselOfPictures />
    </div>
  );
}

export default App;
