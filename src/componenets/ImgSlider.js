import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { selectClouserMovies } from "../features/movieClouser/movieClouserSlice";
import { Link } from "react-router-dom";

function ImgSlider() {
    const moviesClouser = useSelector(selectClouserMovies);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
    return (
        <Carousel {...settings}>
            { moviesClouser &&
                    moviesClouser.map((movie, index)=>(
                        <Wrap key={index}>
                            <Link to={`/detail/${movie.id}`} >
                                <img src={movie.cardImg} alt={movie.title}/>
                            </Link>
                        </Wrap>
                    ))
            }
            <Wrap>
                    <img src="/images/slider-badging.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
        </Carousel>
    )
}

export default ImgSlider


const Carousel=styled(Slider)`
    ul li button{
        &:before {
            font-size: 10px;
            color:rgb(150,158,171);
        } 
    }
    li.slick-active button:before{
        color:white;
    }
    .slick-list{
        overflow:visible;
    }
    button{
        z-index:1;
    }
`

const Wrap=styled.div`
    margin-top:20px;
    cursor:pointer;
    img{
        max-height:400px;
        width: 100%;
        height: 100%;
        border-radius:4px;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition-duration: 300ms;
        &:hover {
            border: 4px solid rgba(249,249,249,0.8);
        }
    }
`