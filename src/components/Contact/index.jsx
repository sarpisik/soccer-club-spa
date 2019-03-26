import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import StaticContent from '../../components/StaticContent';
import ContactIcon from '../../components/ContactIcon';
import Form from './Form';

const mapStyle = {
  maxWidth: '100%',
  height: '150px',
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const coordinate = {
  lat: -1.2884,
  lng: 36.8233
};

const links = [
  //{icon: 'phone', text:'012345568'},
  {icon: 'email', text:'contact@contact.com', link: 'mailto:contact@sarpisik.com'},
  {icon: 'facebook', text:'Facebook Page', link: 'https://www.facebook.com/'},
  {icon: 'youtube', text:'Youtube Channel', link:'https://www.youtube.com/'},
  {icon: 'twitter', text:'Twitter Page', link:'https://twitter.com/'},
  {icon: 'instagram', text:'Instagram Blog', link:'https://www.instagram.com/'}
];

const MapContainer = ({google}) =>
<div id="map" style={mapStyle}>
  <Map
    google={google}
    zoom={14}
    initialCenter={coordinate}
  />
</div>;

const Contact = ({
  google,
  fieldGroup,
}) =>
<StaticContent image={3} title="CONTACT INFO">
  <div className="contact-page">
    <Form />
    <div className="icon-container">
      {links.map((icon, i) =>
        <ContactIcon
          key={i}
          link={icon.link}
          icon={icon.icon}
        />
      )}
    </div>
    <MapContainer google={google} />
    <p><ContactIcon icon="phone"/>012345568</p>
    <p>ADRESS LINE 1</p>
    <p>ADRESS LINE 2</p>
    <p>ADRESS LINE 3</p>
  </div>
</StaticContent>;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVQc8DUr717YYLG2lAUP_gv4HaPq_PbkQ'
})(Contact);
