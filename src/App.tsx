import React from 'react';
import { Tester } from './Tester'
import Container from '@material-ui/core/Container'

const App: React.FC = () => {
  return (
    <Container style={{ textAlign: 'center'}}>
      <Tester></Tester>
    </Container>
  );
}

export default App;
