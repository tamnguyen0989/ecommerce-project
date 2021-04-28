import React from 'react';
import Directory from '../../components/directory/directory.component';
// import './homepage.styles.scss'
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  // <div className='homepage'>
  //   <h1>Welcome to my Homepage</h1>
  //   <Directory/>
  // </div>

  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;