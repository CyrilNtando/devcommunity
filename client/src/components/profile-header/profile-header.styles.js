import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const PaperContainer = styled(Paper)`
  padding: 30px;
  color: #fff;
  background-color: #17a2b8;
  & .header-avatar {
    width: 200px;
    height: 200px;
  }

  & .header-title {
    font-size: 56px;
    margin-bottom: 1rem;
  }
  & .header-subtitle {
    font-size: 20px;
  }
`;
