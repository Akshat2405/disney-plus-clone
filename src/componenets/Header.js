import React,{useEffect} from 'react'
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import{
    auth,
    provider
} from '../firebase';
import{
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from '../features/user/userSlice';
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';


function Header() {
    const dispatch=useDispatch();
    const history=useHistory();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);
    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/");
            }
        })
    },[])
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user=result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push("/");
        })
    }

    const signOut=()=>{
        console.log("I am running honey");
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut());
            history.push("/login");
        })
    }


    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            {
                !userName ?( 
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login>
                </LoginContainer>
                ) :
                <>
                    <NavMenu>
                        <div >
                            <img src="/images/home-icon.svg"/>
                            <span>HOME</span>
                        </div >
                        <div >
                            <img src="/images/search-icon.svg"/>
                            <span>SEARCH</span>
                        </div>
                        <div  >
                            <img src="/images/watchlist-icon.svg"/>
                            <span>WATCHLIST</span>
                        </div>
                        <div >
                            <img src="/images/original-icon.svg"/>
                            <span>ORIGINALS</span> 
                        </div>
                        <div >
                            <img src="/images/movie-icon.svg"/>
                            <span>MOVIES</span> 
                        </div>
                        <div >
                            <img src="/images/series-icon.svg"/>
                            <span>SERIES</span> 
                        </div>
                    </NavMenu>
                    <Userimg onClick={signOut}  src={userPhoto} />
                </>

            }
            
        </Nav>
    )
}

export default Header
const Nav=styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items:center;
    padding: 0 36px;
    overflow-x: hidden;
`
const Logo= styled.img`
    width:80px;
 
`
const NavMenu=styled.div`
    display:flex;
    flex:1;
    align-items: center;
    margin-left: 25px;
    div {
        display: flex;
        align-items: center;
        padding: 0 22px;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content:"";
                height:2px;
                background:white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const Userimg=styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;
`
const Login=styled.div`
    border: 1px solid #f9f9f9;
    padding: 6px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    transition: all 0.2s ease 0s;
    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const LoginContainer=styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
`