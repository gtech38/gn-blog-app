import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

//TODP: Move this to a separate file
export type pictureItem = {
  src: string;
  altText: string;
  caption: string;
  key: number;
};

//TODO: Get pictures from WebURL via API call
//TODO: Store Pictures in REDUX store
//TODO: Pull Pictures out of REDUX Store
const items: pictureItem[] = [
  {
    src: "https://picsum.photos/id/123/1200/400",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "http://localhost:8080/MilkywayWindmillLong.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "http://localhost:8080/MilkywayWindmillFlashlight.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
  {
    src: "http://localhost:8080/BarnPolaris.jpg",
    altText: "Slide 4",
    caption: "Slide 4",
    key: 4,
  },
  {
    src: "http://localhost:8080/MilkywayWindmillWide.jpg",
    altText: "Slide 5",
    caption: "Slide 5",
    key: 5,
  },
];

const CarouselWithMockData: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    console.log(activeIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    console.log(activeIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    console.log(item);
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  //TODO: Change button colors base on image a
  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              max-height: 100%;
              background: black;
            }`}
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        // dark={true}
        keyboard={true}
        hover="true"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

const CarouselOfPictures: React.FC = () => {
  return (
    <div>
      <CarouselWithMockData />
    </div>
  );
};

export default CarouselOfPictures;
