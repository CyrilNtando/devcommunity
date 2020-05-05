import styled from 'styled-components';
import backImage from '../../assets/Desktop.jpg';

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  margin-top: 3.75rem;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(${backImage});
  background-size: cover;
`;

export const HeaderBoxContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  & > h1 {
    letter-spacing: 0.18rem;
    color: inherit;
    font-weight: 300;
    font-size: 4.37rem;
    line-height: 1.7;
  }
  & > p {
    font-weight: 300;
    font-size: 1.25rem;
  }

  & .headerBox__btn-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    & a:first-child {
      margin-right: 30px;
    }
  }
`;
