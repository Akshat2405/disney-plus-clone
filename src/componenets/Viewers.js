import React from 'react'
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png"/>
                {/* <div><video width="100%" height="100%" loop >
                <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
                </video></div> */}
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png"/>
                {/* <div><video width="100%" height="100%" loop >
                <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
                </video></div> */}
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png"/>
                {/* <div><video width="100%" height="100%" autoplay loop >
                <source src="/videos/1564676115-marvel.mp4"/>
                Your browser does not support the video tag.
                </video></div> */}
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png"/>
                {/* <div><video width="100%" height="100%" loop >
                <source src="/videos/1608229455-star-wars.mp4"/>
                Your browser does not support the video tag.
                </video></div> */}
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png"/>
                {/* <div><video width="100%" height="100%" loop >
                <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
                </video></div> */}
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container=styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5,minmax(0,1fr));

`
const Wrap=styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        // position: relative;
            width: 100%;
            height: 100%;
            object-fit: cover;
    }
    &:hover{
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
    // div {
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     object-fit: cover;
    //     width: 100%;
    //     height: 100%;
    // }
    
`