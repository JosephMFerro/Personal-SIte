import React from "react";
import Particles from 'react-particles-js';
import styled from 'styled-components';

const Particle = () => (
  <Container>
    <Particles
        params={{
	        "particles": {
	            "number": {
	                "value": 40
	            },
	            "size": {
	                "value": 1
	            }
	        },
	        "interactivity": {
	            "events": {
	                "onhover": {
	                    "enable": true,
	                    "mode": "repulse"
	                }
	            }
	        }
	    }} 
    />
  </Container>
);

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export default Particle;