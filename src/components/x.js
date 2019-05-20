import React from 'react';
import styled from 'styled-components';
import { media } from '../common/styles';

const SVG = styled.svg`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: none;

  ${media.tablet} {
    display: ${props => props.open ? 'inline-block' : 'none'};
  }
`;

const X = ({open, onClick}) => (
  <SVG 
    open={open}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </SVG>
)

export default X;