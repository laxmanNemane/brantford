

import React, { Component } from 'react'
import MapGL from 'react-map-gl'
import Directions from 'react-map-gl-directions'

function getAccessToken() {
  var accessToken = null

  if (typeof window !== 'undefined' && window.location) {
    var match = window.location.search.match(/access_token=([^&\/]*)/)
    accessToken = match && match[1]
  }

  if (!accessToken && typeof process !== 'undefined') {
    // Note: This depends on bundler plugins (e.g. webpack) inmporting environment correctly
    accessToken = accessToken || 'pk.eyJ1IjoibmlraGlsYm9yZ2UiLCJhIjoiY2w4Y296eXBwMDR6ajN1bXltb2cxOXoyeCJ9.DgZ7KWKaUNJDltG3weSwEw' // eslint-disable-line
  }

  return accessToken || null
}

// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN = 'pk.eyJ1IjoibmlraGlsYm9yZ2UiLCJhIjoiY2w4Y296eXBwMDR6ajN1bXltb2cxOXoyeCJ9.DgZ7KWKaUNJDltG3weSwEw'

class Example extends Component {
  state = {
    viewport: {
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
    },
  }

  mapRef = React.createRef()

  handleViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
    })
  }

  render() {
    return (
      <MapGL
        ref={this.mapRef}
        {...this.state.viewport}
        width="100%"
        height="100%"
        onViewportChange={this.handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}>
        <Directions mapRef={this.mapRef} mapboxApiAccessToken={MAPBOX_TOKEN} />
      </MapGL>
    )
  }
}

export default Example