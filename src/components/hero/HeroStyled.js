import styled from 'styled-components';

export const HeroStyled = styled.div`
  .asteroidWrapper {
    position: relative;
  }
  .asteroidImg {
    /* float: left; */
    position: absolute;
    /* margin: 0 auto; */

    top: 50%;
    right: 0;
    width: 40px;
    height: 40px;
    margin-right: -10px;

    -webkit-animation-name: spin;
    -webkit-animation-duration: 13000ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;

    -moz-animation-name: spin;
    -moz-animation-duration: 13000ms;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;

    -ms-animation-name: spin;
    -ms-animation-duration: 13000ms;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;

    animation-name: spin;
    animation-duration: 13000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @-ms-keyframes spin {
      from {
        -ms-transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
      }
    }
    @-moz-keyframes spin {
      from {
        -moz-transform: rotate(0deg);
      }
      to {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @media screen and (min-width: 768px) {
      width: 90px;
      height: 90px;
      /* margin-left: -60px;
      margin-right: -60px; */
    }
  }

  .rocketWrapper {
    position: relative;
  }
  .rocket {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    animation-name: rocketScale;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes rocketScale {
      from {
        transform: scale(0.9);
        /* transform: rotate(45deg); */
      }
      to {
        transform: scale(1.1);
        /* transform: rotate(45deg); */
      }
    }

    @media screen and (min-width: 768px) {
      width: 90px;
      height: 90px;
    }
  }
`;
