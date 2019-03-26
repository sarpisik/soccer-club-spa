import React from 'react';
import {Modal, Image, Button} from 'react-bootstrap';
import Thumbnail from '../components/Thumbnail';

const ThumbnailStyle= {
  margin: '0',
  padding: '0',
  border: '0'
};

export default class ModalImage extends React.Component {
  constructor(props) {
    super(props);

    this.state={show: false, index:'',};
  }

  componentDidMount() {
    const {data, src} = this.props;
    let imageIndex = data.indexOf(src);
    this.setState(state => ({
      index: imageIndex,
    }));
  }

  onHide = _ => this.setState(state => ({
    show: !state.show
  }));

  onClick = e => {
    let newIndex = (e.target.name === 'n' && +1 ) || -1;
    this.setState(state => {
      return {index: state.index + newIndex};
    })
  }

  render() {
    const {data, src, divide} = this.props;
    const {show, index} = this.state;
    // Disable N & P buttons
    const isPrevious = index === 0 && true;
    const isNext = index === data.length -1 && true;
    return (
      <>
        <Thumbnail style={(divide &&ThumbnailStyle) || null} data={src} onClick={this.onHide} />
        <Modal bsSize="large" show={show} onHide={this.onHide}>
          <Modal.Header closeButton />
          <Modal.Body>
            <Image responsive rounded src={data[index]} />
          </Modal.Body>
          <Modal.Footer>
            <Button style={{float: 'left'}} disabled={isPrevious} name="p" className="button-club" onClick={this.onClick}>
              &larr; Previous
            </Button>
            <Button disabled={isNext} name="n" className="button-club" onClick={this.onClick}>
              Next &rarr;
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
ModalImage.defaultProps = {
  divide: false,
}
ModalImage.propTypes = {
};
