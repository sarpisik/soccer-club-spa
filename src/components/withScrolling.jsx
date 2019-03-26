import React from 'react';

const getDimension = (node, dimension) => node.getBoundingClientRect()[dimension];

const withScrollling = Component => (
  class WithScrolling extends React.Component {
    constructor(props) {
      super(props);
      // Create A Ref for the child component
      // Use a Ref instead of setting state
      // to prevent lag on scroll event
      this.scrollRef = React.createRef();
    }

    componentDidMount() {
      this.addEvent();
    }

    componentWillUnmount() {
      this.removeEvent();
    }

    addEvent = _ => window.addEventListener('scroll', this.onScroll);

    removeEvent = _ => window.removeEventListener('scroll', this.onScroll);

    onScroll = _ => {
      // Referred Element
      let node = this.scrollRef.current;

      if (node.classList.contains('scrolled')) {
        // Remove event if element scrolled already once
        this.removeEvent();
      } else {
        // Toggle class to trigger animation
        // if the element visible
        if (this.isVisible(node)) node.classList.add("scrolled");
      }
    }

    isVisible = node => {
      // Required dimensions of the node
      // to calculate visibility
      let top = getDimension(node, 'top');
      let bottom = getDimension(node, 'bottom');
      let height = getDimension(node, 'height');
      let screenHeight = window.innerHeight;
      return (
        // if return true toggle the className
        (top + height >= 0)
        &&
        (height + screenHeight >= bottom)
      )
    }

    render() {
      return <Component {...this.props} scrollRef={this.scrollRef} />
    }
  }
);

export default withScrollling;
