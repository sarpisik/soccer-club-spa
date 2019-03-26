import React from 'react'
import {
  Alert,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Modal
} from 'react-bootstrap'
import FormValidator from './FormValidator'

const withForm = propState => rules => Component => {
  class WithForm extends React.Component {
    constructor(props) {
      super(props)

      // Child component creates
      // The initial tate
      this.state = { ...propState, show: false }

      // Input Validations
      this.validator = new FormValidator(rules)
    }

    FieldGroup = ({ id, label, validationState, ...props }) => (
      <FormGroup validationState={validationState} controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        <FormControl.Feedback />
      </FormGroup>
    )

    onChange = e => {
      let name = e.target.name
      let value = e.target.value
      this.setState(state => ({
        [name]: value
      }))
    }

    onValidate = e => {
      if (this.state[e] !== '') {
        const validation = this.validator.validate(this.state)
        return validation[e].isInvalid ? 'error' : 'success'
      }
    }

    onSubmit = _ =>
      this.setState(state => ({ ...propState, show: !state.show }))

    isValidate = _ =>
      Object.keys(propState).every(
        value => this.onValidate(value) === 'success'
      )

    render() {
      return (
        <>
          <Component
            {...this.state}
            {...this.props}
            FieldGroup={this.FieldGroup}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            getValidationState={this.onValidate}
            isValidate={this.isValidate}
          />
          <Modal
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
            show={this.state.show}
            onHide={this.onSubmit}>
            <Modal.Header closeButton />
            <Modal.Body style={{ padding: '0' }}>
              <Alert
                style={{
                  position: 'static',
                  margin: '0'
                }}
                bsStyle="success">
                Your Message Has Been Sent. <strong>Thank you!</strong>
              </Alert>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="success" onClick={this.onSubmit}>
                <strong>OK</strong>
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )
    }
  }
  return WithForm
}

export default withForm
