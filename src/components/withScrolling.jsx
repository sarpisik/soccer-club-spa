import React from 'react'

const withScrollling = Component =>
  class WithScrolling extends React.Component {
    constructor(props) {
      super(props)
      // Create A Ref for the child component
      // Use a Ref instead of setting state
      // to prevent lag on scroll event
      this.scrollRef = React.createRef()
    }

    componentDidMount() {
      this.addEvent()
    }

    componentWillUnmount() {
      this.removeEvent()
    }

    addEvent = () => window.addEventListener('scroll', this.onScroll)

    removeEvent = () => window.removeEventListener('scroll', this.onScroll)

    onScroll = () => {
      // Referred Element
      let node = this.scrollRef.current

      if (node.classList.contains('scrolled')) {
        // Remove event if element scrolled already once
        this.removeEvent()
      } else {
        // Toggle class to trigger animation
        // if the element visible
        if (this.isVisible(node)) {
          node.classList.add('scrolled')
        }
      }
    }

    isVisible = node => {
      // Required dimensions of the node
      // to calculate visibility
      let top = this.getDimension(node, 'top')
      let bottom = this.getDimension(node, 'bottom')
      let height = this.getDimension(node, 'height')
      let screenHeight = window.innerHeight
      return (
        // if return true toggle the className
        top + height >= 0 && height + screenHeight >= bottom * 1.25
      )
    }

    getDimension = (node, dimension) => node.getBoundingClientRect()[dimension]

    render() {
      return <Component {...this.props} scrollRef={this.scrollRef} />
    }
  }

export default withScrollling
