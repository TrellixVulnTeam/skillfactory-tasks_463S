import React, { Component, useState} from 'react';
import ReactDOM from 'react-dom';
import Radium, {StyleRoot} from 'radium';
import { fadeInDownBig } from 'react-animations';
import Portal from './portal';
import {Link} from 'react-router-dom';
import SignUp from './SignUpStepone';

import Close from '../img/module-close.svg';
import SignInPic from '../img/undraw_sign_in.svg';

import '../styles/signIn.css';


const srcSignUpPage = '../signUp/stepone'
const styles = {
    fadeInDownBig: {
      animation: 'x 0.8s',
      animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')
    }
}

const SignIn = (data) => {
    return(
            <Portal>
                <StyleRoot>
                    <div className='modal' style={styles.fadeInDownBig}>
                        <img src={Close} className='modal-close' onClick={() => {data.updateData(false)}}></img>
                        <img src={SignInPic} className='modal-pic'></img>
                        <h2>Авторизация</h2>
                        <input type='text' placeholder='Электронная почта' className='modal-input-login'></input>
                        <input type='password' placeholder='Пароль' className='modal-input-pass'></input>
                        <button className='modal-button-signIn disable'>Войти</button>
                        <span></span>
                        <Link to={srcSignUpPage} onClick={() => {data.updateData(false)}}>Зарегистрироваться</Link>
                    </div>
                </StyleRoot>
            </Portal>
    )
}

export default SignIn