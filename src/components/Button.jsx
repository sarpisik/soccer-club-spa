import React from 'react';
import { Button } from 'react-bootstrap';

export default ({...props}) => (
  <Button {...props}>
    {props.children}
  </Button>
)
