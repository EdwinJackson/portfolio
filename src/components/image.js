import styled from 'styled-components';
import { images } from '../common/styles';

const Image = styled.img`
  height: ${props => images[props.size] || images.medium};
  width: ${props => images[props.size] || images.medium};
`;

export default Image;