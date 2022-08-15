import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousal.css';
import Card from '../card/Card'
import { cardDetails } from './data2';
import { IoArrowForwardCircle, IoArrowBackCircle } from 'react-icons/io5';
import { useState } from 'react';
import { useEffect } from 'react';


let slidesToShow = 4;
const PreviousBtn = (props) => {
  const { onClick, currentSlide } = props;
  return (
    <>
      {/* {currentSlide !== 0 && ( */}
        <div className="bkArrow" onClick={onClick}>
          <IoArrowBackCircle style={{ color: '#A3B1E4', fontSize: '60px' }} />
        </div>
      {/* )} */}
    </>
  );
};
const NextBtn = (props) => {
  const { onClick, slideCount, currentSlide } = props;

  return (
    <>
      {/* {currentSlide !== slideCount - slidesToShow && ( */}
        <div className="fwArrow" onClick={onClick}>
          <IoArrowForwardCircle style={{ color: '#A3B1E4', size:"3rem", fontSize: '60px' }} />
        </div>
      {/* )} */}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
    // {
    //   breakpoint: 1400,
    //   settings: {
    //     slidesToShow: 4,
    //     centerMode: false,
    //     slidesToScroll: 1,
    //   },
    // },
  ],
};

const MultiItemCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 2;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 2;
  } else if (width > 1025 && width <= 1400) {
    slidesToShow = 3;
  } else {
    slidesToShow = 4;
  }

  return (
    <div className='carousal'>
      <Slider {...carouselProperties}>
        {cardDetails.map((list, index) => (
          <Items list={list} index={index} />
        ))}
      </Slider>
    </div>
  );
};

const Items = ({ list, index }) => {
  return (
    <div className="box">
    <Card list={list} index={index}/>
    </div>
  );
};

export default MultiItemCarousel;