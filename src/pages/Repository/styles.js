import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #43b1bf;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 100px;
    margin-top: 20px;
  }

  h1 {
    font-size: 25px;
    margin-top: 14px;
  }

  p {
    margin: 5px;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;
