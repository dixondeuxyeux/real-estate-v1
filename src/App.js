import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
// import {Modal} from './components/Modal';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { InfoData } from './data/InfoData';
import { InfoDataTwo } from './data/InfoData';
import { SliderData} from './data/SliderData';
import GlobalStyle from './GlobalStyles';

// const Container = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// height: 100vh;
// `

// const Button = styled.Button`
// min-width: 100px;
// padding" 16px 32px;
// border-radius: 4px;
// border: none;
// color: #fff;
// fonts-size: 24px;
// cursor: pointer;
// `

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen)
    
    // const [ showModal, setShowModal] = useState(false);
    // const openModal = () => {
    //   setShowModal(prev => !prev);
    // }
  }

  return (
    <>
    <GlobalStyle />
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Hero slides={SliderData}/>
    {/* <Container>
    <Button onClick={openModal}>I'm a Modal</Button>
    <Modal showModal={showModal} setShowModal=
    {setShowModal} />
    </Container>
    <Modal /> */}
    <InfoSection {...InfoData} />
    <InfoSection {...InfoDataTwo} />
    </>
  );
}

export default App;
