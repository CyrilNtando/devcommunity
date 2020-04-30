import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const PaperContainer = styled(Paper)`
  margin: 1rem 0;
  padding: 0 1.5rem;
  padding-bottom: 1.5rem;
  & > div {
    margin-bottom: 1.5rem;
  }
`;
