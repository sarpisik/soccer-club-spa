import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const icons = {
  phone: faPhone,
  email: faEnvelope,
  facebook: faFacebookF,
  youtube: faYoutube,
  twitter: faTwitter,
  instagram: faInstagram
}

// Icon Element
const ContactIcon = ({ icon: { name, text, link, size } }) => (
  <a href={link} rel="noopener noreferrer">
    <FontAwesomeIcon icon={icons[name]} size={size} />
  </a>
)

export default ContactIcon
