import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import StaticContent from '../../components/StaticContent'
import ContactIcon from '../../components/ContactIcon'
import Form from './Form'

class Icon {
  constructor(name, text, link, size = '2x') {
    this.name = name
    this.text = text
    this.link = link
    this.size = size
  }
}

const links = [
  new Icon('email', 'contact@contact.com', 'mailto:contact@sarpisik.com'),
  new Icon('facebook', 'Facebook Page', 'https://www.facebook.com/'),
  new Icon('youtube', 'Youtube Channel', 'https://www.youtube.com/'),
  new Icon('twitter', 'Twitter Page', 'https://twitter.com/'),
  new Icon('instagram', 'Instagram Blog', 'https://www.instagram.com/')
]

const mapStyle = {
  maxWidth: '100%',
  height: '150px',
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const coordinate = {
  lat: -1.2884,
  lng: 36.8233
}

const MapContainer = ({ google }) => (
  <div id="map" style={mapStyle}>
    <Map google={google} zoom={14} initialCenter={coordinate} />
  </div>
)

const Contact = ({ google }) => (
  <StaticContent image={3} title="CONTACT INFO">
    <div className="contact-page">
      <Form />
      <div className="icon-container">
        {links.map((icon, i) => (
          <ContactIcon key={i} icon={icon} />
        ))}
      </div>
      <MapContainer google={google} />
      <p>
        <ContactIcon icon={new Icon('phone')} />
        012345568
      </p>
      <p>ADRESS LINE 1</p>
      <p>ADRESS LINE 2</p>
      <p>ADRESS LINE 3</p>
    </div>
  </StaticContent>
)

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVQc8DUr717YYLG2lAUP_gv4HaPq_PbkQ'
})(Contact)
