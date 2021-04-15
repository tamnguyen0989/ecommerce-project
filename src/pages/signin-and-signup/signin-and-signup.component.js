import React from 'react';

import SignIn from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';

import './signin-and-signup.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <Signup />
  </div>
);

export default SignInAndSignUpPage;