import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import  Card from "@/components/card-productos";
import  Card2 from "@/components/card2";
import  Card3 from "@/components/card3";
import  Card4 from "@/components/card4";
import  Card5 from "@/components/card5";
import  Card6 from "@/components/card6";
import  Card7 from "@/components/card7";
import  Card8 from "@/components/card8";
import  Card9 from "@/components/card9";
import  Card10 from "@/components/card10";
import  Card11 from "@/components/card11";
import  Card12 from "@/components/card12";
import  Card13 from "@/components/card13";
import  Card14 from "@/components/card14";

function Responsive() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1114,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 873,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 603,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider-container" >
        <Slider {...settings} style={{ height: '450px' }} className="slider">
          <div>
            <Card/>
          </div>
          <div>
            <Card2/>
          </div>
          <div>
            <Card3/>
          </div>
          <div>
            <Card4/>
          </div>
          <div>
            <Card5/>
          </div>
          <div>
            <Card6/>
          </div>
          <div>
            <Card7/>
          </div>
          <div>
            <Card8/>
          </div>
          <div>
            <Card9/>
          </div>
          <div>
            <Card10/>
          </div>
          <div>
            <Card11/>
          </div>
          <div>
            <Card12/>
          </div>
          <div>
            <Card13/>
          </div>
          <div>
            <Card14/>
          </div>
        </Slider>
      </div>
      
    );
  }
  
  export default Responsive;