import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default ({ id, label, validationState, ...props }) => (
  <FormGroup
    validationState={validationState}
    controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    <FormControl.Feedback />
  </FormGroup>
);
