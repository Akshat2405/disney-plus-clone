import React from 'react'
import styled from 'styled-components';
function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <Signup>
                    GET ALL HERE
                </Signup>
                <Description>
                    Get the perimimum access of all the contents of Disney + and get most of them in just one Subscription. This Will be very Usefull. We Hope you just subscribe. Thiss will be useful.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
}

export default Login

const Container=styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    &: before{
        background: url("/images/login-background.jpg") center center / cover no-repeat fixed;
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1; 
    }
    
`
const CTA=styled.div`
    padding: 80px 40px;
    width:60%;
    display: flex;
    flex-direction: column;

`

const CTALogoOne=styled.img`

`
const CTALogoTwo=styled.img`

`


const Signup=styled.a`
    margin-top: 8px;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    &:hover{
        background: #0483ee;
    }
`
const Description=styled.p`
    line-height: 1.5;
    letter-spacing: 1.5px;
    font-size: 15px;
    color: rgb(249,249,249);
    text-align: center;
    margin-bottom: 36px;
`