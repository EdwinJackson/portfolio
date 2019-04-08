import styled from 'styled-components';
import { colour } from '../common/styles';

const SectionHeader = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: ${props => props.diminished ? colour.diminishedBlack : colour.black };
`;

const ItemHeader = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`;

const ItemSubHeader = styled.h3`
  font-size: 1rem;
  color: rgba(52, 52, 52, 0.5);
`;

const Body = styled.p`
  line-height: 1.5rem;
`;

const Title = styled.h1`
  margin: 1rem auto;
  text-align: center;
  font-size: 1.5rem;
  font-family: 'Karla', monospace;
  font-weight: bold;
`;

export {
  SectionHeader,
  ItemHeader,
  ItemSubHeader,
  Body,
  Title
}