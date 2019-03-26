import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const icons = {
  phone: faPhone,
  email: faEnvelope,
  facebook: faFacebookF,
  youtube: faYoutube,
  twitter: faTwitter,
  instagram: faInstagram
};

// Icon Element
const ContactIcon = ({link, icon, size, target}) => (
  <a
    href={link}
    target={target}
    rel='noopener noreferrer'
  >
    <FontAwesomeIcon icon={icons[icon]} size={size}/>
  </a>
);

ContactIcon.defaultProps = {
  size: '2x'
};

export default ContactIcon;
