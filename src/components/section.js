import styled from 'styled-components';
import { media } from '../common/styles';

const Section = styled.section`
    padding: 0 2rem;
    margin: 0 auto 4rem;

    ${media.tablet} {
        padding-left: 1rem;
    }
`;

export default Section;