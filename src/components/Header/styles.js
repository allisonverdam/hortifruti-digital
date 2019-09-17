import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  height: 48px;
  top: 0;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  li {
    float: right;
    min-width: 4rem;
  }

  li a {
    display: block;
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-weight: bold;

  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .active {
    background-color: #ffd400;
  }
`;
