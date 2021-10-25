import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const styles = {
  width: "100%",
  aspectRatio: "2"
};

const ecoregions = require('../data/ecoregions.json')
const idList = [0, 98, 99, 101, 107, 112, 124, 127, 128, 130, 132, 134, 135, 156, 157, 158, 159, 162, 188, 189, 191, 192, 193, 194, 195, 196, 202, 203, 205, 209, 210, 211]

ecoregions.features = ecoregions.features.filter(item => {
  if (idList.filter(id => id === item.properties.ECOREGION).length > 0) {
    return item;
  }
})

mapboxgl.accessToken = "pk.eyJ1IjoiYnJldHQ3NyIsImEiOiJja3QwanZ6NDQwNXl6MzJuMDdsanVtamY0In0.2ij5RMkF9AYtSSag_66tcQ";

const CustomMap = ({ activeStep, geography, setGeography, map }) => {
  const mapContainer = useRef(null);

//  console.log(mod1MapData)

  useEffect(() => {

    var matchExpression = ['match', ['get', 'ECOREGION']];

    // Last value is the default, used where there is no data
    matchExpression.push('rgba(0, 0, 0)');

    if (map.current) {

        map.current.setPaintProperty(
            'ecoregions',
            'fill-color',
            '#6D8764'
        )

        return;

    }

    if (!activeStep) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/light-v10", // stylesheet location
            center: [-93, 53],
            zoom: 3.2
      });

      map.current.on('load', () => {

        map.current.resize();

        map.current.addSource('ecoregions', {
            'type': 'geojson',
            'data': ecoregions,
            'generateId': true
        })

        var matchExpression = ['match', ['get', 'ECOREGION']];

        // Last value is the default, used where there is no data
        matchExpression.push('rgba(0, 0, 0)');

        map.current.addLayer({
            'id': 'ecoregions',
            'type': 'fill',
            'source': 'ecoregions', // reference the data source
            'layout': {},
            'paint': {
                'fill-color': '#6D8764',
                'fill-opacity': 0.5
            }
        }, 'settlement-label');

        map.current.addLayer({
            'id': 'outline',
            'type': 'line',
            'source': 'ecoregions',
            'layout': {},
            'paint': {
            'line-color': [
                'case',
                ['boolean', ['feature-state', 'clicked'], false],
                '#4D4F53', // if selected true, paint in blue
                '#ffffff' // else paint in gray
            ],
            'line-width': 1
            }
        }, 'settlement-label');

    })

  }, [activeStep]);

  useEffect(() => {

    if (!map.current || !activeStep ) return;

    // When a click event occurs on a feature in the eastern_ontario layer,
    // open a popup at the location of the click, with description
    // HTML from the click event's properties.

    var polygonID = null;

    map.current.on('click', 'ecoregions', (e) => {

        setGeography(parseInt(e.features[0].properties.ECOREGION))

        // Change line style
        if (e.features.length > 0) {
          map.current.removeFeatureState({
            source: "ecoregions",
          });

            polygonID = e.features[0].id;

          map.current.setFeatureState({
              source: 'ecoregions',
              id: polygonID,
            }, {
              clicked: true
            });
        }

    });

    // Change the cursor to a pointer when
    // the mouse is over the eastern_ontario layer.
    map.current.on('mouseenter', 'ecoregions', () => {
        map.current.getCanvas().style.cursor = 'pointer';
    });

    // Change the cursor back to a pointer
    // when it leaves the eastern_ontario layer.
    map.current.on('mouseleave', 'ecoregions', () => {
        map.current.getCanvas().style.cursor = '';
    });

  }, [activeStep]);

  return <div ref={mapContainer} style={styles} />;
};

export default CustomMap;
