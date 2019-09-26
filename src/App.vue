<template>
  <v-app>
    <v-content>
      <v-menu
          v-model="menu"
          :nudgeRight="menuX"
          :nudgeBottom="menuY"
          attach="#map"
          absolute
          offset-y
          :left="menuLeft"
          :right="menuRight"
          :top="menuTop"
          :bottom="menuBottom"
          >
          <v-list dense>
              <v-list-tile @click="setTripOrigin">
                  <v-list-tile-avatar>
                      <v-icon>trip_origin</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                      <v-list-tile-title>From</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="setTripWaypoint">
                  <v-list-tile-avatar>
                      <v-icon>add_circle</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                      <v-list-tile-title>Via</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="setTripDestination">
                  <v-list-tile-avatar>
                      <v-icon>place</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                      <v-list-tile-title>To</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
          </v-list>
      </v-menu>
        <div id="panel">
          <v-list dense>
              <v-list-tile>
                  <v-list-tile-avatar>
                      <v-icon>trip_origin</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                      <v-list-tile-title>Origin</v-list-tile-title>
                      <v-list-tile-sub-title>{{origin}}</v-list-tile-sub-title>
                  </v-list-tile-content>
              </v-list-tile>
              <v-list-tile v-if="waypoints.length" v-for="(waypoint, index) in waypoints">
                  <v-list-tile-avatar>
                      <v-icon>add_circle</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                      <v-list-tile-title>Waypoint {{index + 1}}</v-list-tile-title>
                      <v-list-tile-sub-title>{{waypoint}}</v-list-tile-sub-title>
                  </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                  <v-list-tile-avatar>
                      <v-icon>place</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                      <v-list-tile-title>Destination</v-list-tile-title>
                      <v-list-tile-sub-title>{{destination}}</v-list-tile-sub-title>
                  </v-list-tile-content>
              </v-list-tile>
          </v-list>
          <v-layout row wrap ma-4>
              <v-flex xs12>
                  <h4>Display</h4>
              </v-flex>
              <v-flex xs12>
              <v-btn-toggle v-model="display" mandatory>
                  <v-btn flat value="none">
                      None
                  </v-btn>
                  <v-btn flat value="speed">
                      Speed
                  </v-btn>
                  <v-btn flat value="congestion">
                      Congestion
                  </v-btn>
              </v-btn-toggle>
              </v-flex>
          </v-layout>
          <v-layout row wrap ma-4>
              <v-flex xs12>
                  <h4>Profile</h4>
              </v-flex>
              <v-flex xs12>
                  <v-btn-toggle v-model="mode" mandatory>
                      <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                              <v-btn flat v-on="on" value="driving-traffic">
                                  <v-badge color="black" overlap>
                                      <template v-slot:badge>
                                          <v-icon color="white" small>watch_later</v-icon>
                                      </template>
                                      <v-icon>directions_car</v-icon>
                                  </v-badge>
                              </v-btn>
                          </template>
                          <span>Driving with Traffic</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                              <v-btn flat v-on="on" value="driving">
                                  <v-icon>directions_car</v-icon>
                              </v-btn>
                          </template>
                          <span>Driving</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                              <v-btn flat v-on="on" value="cycling">
                                  <v-icon>directions_bike</v-icon>
                              </v-btn>
                          </template>
                          <span>Cycling</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                              <v-btn flat v-on="on" value="walking">
                                  <v-icon>directions_walk</v-icon>
                              </v-btn>
                          </template>
                          <span>Walking</span>
                      </v-tooltip>
                  </v-btn-toggle>
              </v-flex>
          </v-layout>
          <v-layout row wrap ma-4>
              <v-flex xs12 mb-2>
                  <v-checkbox v-model="alternatives" label="Show Alternatives"></v-checkbox>
              </v-flex>
              <v-flex xs12 mb-2>
                  <v-checkbox v-model="continueStraight" :disabled="waypoints.length === 0" label="Continue Straight"></v-checkbox>
              </v-flex>
              <v-flex xs12>
                  <v-checkbox v-model="avoidToll" :disabled="mode === 'walking' || mode === 'cycling'" label="Avoid Tolls"></v-checkbox>
              </v-flex>
              <v-flex xs12>
                  <v-checkbox v-model="avoidMotorway" :disabled="mode === 'walking' || mode === 'cycling'" label="Avoid Motorways"></v-checkbox>
              </v-flex>
              <v-flex xs12>
                  <v-checkbox v-model="avoidFerry" :disabled="mode === 'walking'" label="Avoid Ferries"></v-checkbox>
              </v-flex>
          </v-layout>
          <v-alert
              :value="error"
              type="error"
              >
              The Mapbox Directions API responded with an error.
          </v-alert>
          <v-expansion-panel v-model="selectedRoute" v-if="routes" >
              <v-expansion-panel-content
                  v-for="(route, index) in routes.features"
                  :key="index"
                  >
                  <template v-slot:header>
                      <div>
                          <v-avatar color="#4264fb" size="28" class="mr-2">
                              <span class="white--text headline">{{index + 1}}</span>
                          </v-avatar>
                          <div>{{route.properties.legs[0].summary}}</div>
                          <div>
                          {{formatDistance(route.properties.legs[0].distance)}}
                          {{formatDuration(route.properties.legs[0].duration)}}
                          </div>
                      </div>
                  </template>
                  <v-card>
                      <v-card-text>
                          {{formatDistance(route.properties.legs[0].distance)}}
                          {{formatDuration(route.properties.legs[0].duration)}}
                      </v-card-text>
                  </v-card>
              </v-expansion-panel-content>
          </v-expansion-panel>
          <v-textarea
              box
              label="Mapbox API URL"
              :value="mapboxUrl"
              readonly
              class="ma-4"
              ></v-textarea>
          <v-layout ma-4>
              <a rel="noopener" target="_blank" :href="googleMapsUrl">
                  <v-icon>open_in_new</v-icon>
                  Google Maps
              </a>
          </v-layout>
        </div>
        <div id="map"></div>
    </v-content>
  </v-app>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import bbox from '@turf/bbox'

const urlParams = new URLSearchParams(window.location.search)
mapboxgl.accessToken = urlParams.get('access_token') || localStorage.getItem('MapboxAccessToken')

const MapboxDirections = require('@mapbox/mapbox-sdk/services/directions');
const directionsService = MapboxDirections({ accessToken: mapboxgl.accessToken })

const formatter = new Intl.NumberFormat('en-AU', {
  maximumFractionDigits: 1
})

export default {
    name: 'App',
    mounted () {
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [0, 0],
            zoom: 0,
            hash: true
        })
        this.map.on('load', this.mapLoaded);
        const originSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        originSVG.setAttributeNS(null, 'display', 'block')
        originSVG.setAttributeNS(null, 'width', '20px')
        originSVG.setAttributeNS(null, 'height', '20px')
        originSVG.setAttributeNS(null, 'viewBox', '0 0 20 20')

        const originSVGCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        originSVGCircle.setAttributeNS(null, 'r', '7.25')
        originSVGCircle.setAttributeNS(null, 'cy', '8')
        originSVGCircle.setAttributeNS(null, 'cx', '8')
        originSVGCircle.setAttributeNS(null, 'color', '#000000')
        originSVGCircle.setAttributeNS(null, 'stroke', '#ffffff')
        originSVGCircle.setAttributeNS(null, 'stroke-width', '1.5')

        originSVG.appendChild(originSVGCircle)

        this.originMarker = new mapboxgl.Marker({
            element: originSVG,
            draggable: true
        })

        this.destinationMarker = new mapboxgl.Marker({
            color: '#4264fb',
            draggable: true
        })

        this.originMarker.on('dragend', () => {
            this.origin = this.originMarker
                .getLngLat()
                .toArray()
                .map(coord => {
                    return Number(coord.toFixed(5))
                })
        })
        this.destinationMarker.on('dragend', () => {
            this.destination = this.destinationMarker
                .getLngLat()
                .toArray()
                .map(coord => {
                    return Number(coord.toFixed(5))
                })
        })
    },
    watch: {
        selectedRoute: function (newIndex, oldIndex) {
            const toIndex = this.routes.features.length
            const fromIndex = this.routes.features.findIndex(feature => {
                return feature.id === (newIndex + 1)
            })
            this.routes.features.splice(toIndex, 0, this.routes.features.splice(fromIndex, 1)[0]);
            this.map.getSource('route').setData(this.routes)

            if (oldIndex !== null) {
                this.map.removeFeatureState({
                    source: 'route',
                    id: oldIndex + 1
                }, 'active')
            }

            if (newIndex !== null) {
                this.map.setFeatureState({
                    source: 'route',
                    id: newIndex + 1
                }, {
                    active: true
                })
            }
        },
        origin: function (origin) {
            /*
            this.map.getSource('origin').setData({
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Point',
                    coordinates: origin
                }
            });
            */
            this.originMarker
                .setLngLat(origin)
                .addTo(this.map);

            this.updateDirections()

            urlParams.set('origin', origin.join(','))
            this.updateUrl()
        },
        destination: function (destination) {
            this.destinationMarker
                .setLngLat(destination)
                .addTo(this.map);
            
            this.updateDirections()

            urlParams.set('destination', destination.join(','))
            this.updateUrl()
        },
        waypoints: function (waypoints) {
            this.updateDirections()

            urlParams.set('waypoints', waypoints.map(wpt => { return wpt.join(',') }).join(';'))
            this.updateUrl()
        },
        avoidToll: function (value) {
            this.updateDirections()

            urlParams.set('avoidtoll', value)
            this.updateUrl()
        },
        avoidMotorway: function (value) {
            this.updateDirections()

            urlParams.set('avoidmotorway', value)
            this.updateUrl()
        },
        avoidFerry: function (value) {
            this.updateDirections()

            urlParams.set('avoidferry', value)
            this.updateUrl()
        },
        routes: function (routes) {
            if (routes) {
                this.map.fitBounds(bbox(routes), { padding: 100 })

                console.log(routes)

                routes.features = routes.features.map((route) => {
                    route.geometry.coordinates
                    return route
                })

                /*
                const annotation = routes.features[0].properties.legs[0].annotation
                const distance = routes.features[0].properties.legs[0].distance
                const lineGradient = ['interpolate', ['linear'], ['line-progress']]

                const congestionColor = {
                    unknown: '#ddd',
                    low: '#00ff00',
                    moderate: '#ffff00',
                    heavy: '#ff0000'
                };

                var cumlativeDistance = 0
                for (var i = 0; i < annotation.distance.length; i++) {
                    cumlativeDistance +=  annotation.distance[i]
                    const along = cumlativeDistance / distance
                    lineGradient.push(along, congestionColor[annotation.congestion[i]] || '#ffffff')
                }
                console.log(lineGradient)

                this.map.setPaintProperty('route', 'line-gradient', lineGradient)
                */
            }

            this.map.getSource('route').setData(routes || {
                type: 'FeatureCollection',
                features: []
            })
        },
        alternatives: function (alternatives) {
            this.updateDirections()

            urlParams.set('alternatives', alternatives)
            this.updateUrl()
        },
        mode: function (mode) {
            this.updateDirections()

            urlParams.set('mode', this.mode)
            this.updateUrl()
        }
    },
    components: {
    },
    computed: {
        googleMapsUrl: function () {
            const dataOptions = {
                'driving':         '!4m2!4m1!3e0',
                'driving-traffic': '!4m2!4m1!3e0',
                'cycling':         '!4m2!4m1!3e1',
                'walking':         '!4m2!4m1!3e2'
            }

            if (this.origin && this.destination) {
                return `https://www.google.com.au/maps/dir/${this.origin.slice().reverse()}/${this.destination.slice().reverse()}/data=${dataOptions[this.mode]}`
            } else {
                return ''
            }

        },
        mapboxUrl: function () {
            return `curl -d "" "https://api.mapbox.com/directions/v5/mapbox/${this.mode}?access_token=${mapboxgl.accessToken}"`
        },
        excludes: function () {
            const excludes = []

            if (this.avoidToll) {
                excludes.push('toll')
            }

            if (this.avoidMotorway) {
                excludes.push('motorway')
            }

            if (this.avoidFerry) {
                excludes.push('ferry')
            }

            return excludes.length ? excludes.join(',') : null
        }
    },
    methods: {
        updateUrl: () => {
            history.pushState(null, '', window.location.pathname + '?' + urlParams.toString())
        },
        formatDistance: (distance) => {
            if (distance >= 1000) {
                return formatter.format(distance / 1000) + 'km'
            } else {
                return formatter.format(distance) + 'm'
            }
        },
        formatDuration: (durationInSeconds) => {
            const durationInMinutes = durationInSeconds / 60
            const displayHours = Math.floor(durationInMinutes / 60)
            const displayMinutes = Math.round(durationInMinutes - (Math.floor(durationInMinutes / 60) * 60))

            return [
                displayHours ? `${displayHours}hr` : '',
                displayMinutes ? `${displayMinutes}min` : ''
            ].join(' ')
        },
        updateDirections: function () {
            if (this.origin && this.destination) {
                directionsService.getDirections({
                    profile: this.mode,
                    waypoints: [this.origin, ...this.waypoints, this.destination]
                        .map((waypoint) => {
                            return {
                                coordinates: waypoint
                            }
                        }),
                    alternatives: this.alternatives,
                    exclude: this.excludes, 
                    annotations: ['duration', 'distance', 'speed', 'congestion'],
                    bannerInstructions: true,
                    geometries: 'geojson',
                    overview: 'full',
                    steps: true
                })
                    .send()
                    .then(res => {
                        this.error = null

                        const directions = res.body
                        this.routes = {
                            type: 'FeatureCollection',
                            features: directions.routes.map((route, index) => {
                                return {
                                    type: 'Feature',
                                    id: index + 1,
                                    properties: {
                                        distance: route.distance,
                                        duration: route.duration,
                                        weight: route.weight,
                                        weight_name: route.weight_name,
                                        legs: route.legs
                                    },
                                    geometry: route.geometry
                                }
                            })
                        }

                        this.map.getSource('waypoints').setData({
                            type: 'FeatureCollection',
                            features: directions.waypoints.map((waypoint) => {
                                return {
                                    type: 'Feature',
                                    properties: {
                                        name: waypoint.name
                                    },
                                    geometry: {
                                        type: 'Point',
                                        coordinates: waypoint.location
                                    }
                                }
                            })
                        })

                        // reset selected route
                        this.selectedRoute = 0

                        console.log(directions)
                    }, err => {
                        this.error = err
                        this.routes = null
                    })
            }
        },
        mapLoaded: function () {
            this.map.addSource('origin', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: []
                }
            })
            this.map.addLayer({
                id: 'origin',
                type: 'circle',
                source: 'origin'
            })

            this.map.addSource('waypoints', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: []
                }
            })
            this.map.addLayer({
                id: 'waypoints',
                type: 'circle',
                source: 'waypoints'
            })

            this.map.addSource('route', {
                type: 'geojson',
                buffer: 16,
                lineMetrics: true,
                data: {
                    type: 'FeatureCollection',
                    features: []
                }
            })
            this.map.addLayer({
                id: 'route-wireframe',
                type: 'circle',
                source: 'route',
                paint: {
                    'circle-radius': 2
                }
            })
            this.map.addLayer({
                id: 'route',
                type: 'line',
                source: 'route',
                paint: {
                    'line-width': 8,
                    'line-color': [
                        "case",
                        ["boolean", ["feature-state", "active"], false],
                        '#4264fb',
                        '#aaa'
                    ],
                    'line-opacity': [
                        "case",
                        ["boolean", ["feature-state", "active"], false],
                        1,
                        1 // 0.2
                    ]
                }
            }, 'building-number-label')

            this.map.addLayer({
                id: 'route-outer',
                type: 'line',
                source: 'route',
                paint: {
                    'line-width': 2,
                    'line-gap-width': 8,
                    'line-color': [
                        "case",
                        ["boolean", ["feature-state", "active"], false],
                        '#fff',
                        '#eee'
                    ]
                }
            }, 'route')

            this.map.addLayer({
                id: 'route-label',
                type: 'symbol',
                source: 'route',
                paint: {
                    'text-halo-color': 'rgba(255, 255, 255, 255)',
                    'text-halo-width': 2,
                    'text-opacity': [
                        "case",
                        ["boolean", ["feature-state", "active"], false],
                        1,
                        0.5
                    ]
                },
                layout: {
                    'text-field': ["id"],
                    'symbol-placement': 'line-center'
                }
            })

            this.map.on('click', this.mapClick)

            if (urlParams.has('origin')) {
                this.origin = urlParams.get('origin').split(',').map(Number)
            }
            if (urlParams.has('destination')) {
                this.destination = urlParams.get('destination').split(',').map(Number)
            }
            if (urlParams.has('mode')) {
                this.mode = urlParams.get('mode')
            }
        },
        mapClick: function (e) {
            this.menuX = e.point.x
            this.menuY = e.point.y
            this.menuLL = e.lngLat.toArray().map(coord => {
                return Number(coord.toFixed(5))
            })
            this.menu = true

            const mapElement = document.getElementById('map')

            if (e.point.x > mapElement.clientWidth / 2) {
                this.menuRight = false
                this.menuLeft = true
            } else {
                this.menuRight = true
                this.menuLeft = false
            }

            if (e.point.y > mapElement.clientHeight / 2) {
                this.menuTop = true
                this.menuBottom = false
            } else {
                this.menuTop = false
                this.menuBottom = true
            }
        },
        setTripOrigin: function () {
            this.origin = this.menuLL
        },
        setTripWaypoint: function () {
            this.waypoints.push(this.menuLL)
        },
        setTripDestination: function () {
            this.destination = this.menuLL
        },
    },
    data () {
        return {
            origin: null,
            destination: null,
            waypoints: [],

            mode: 0,

            avoidToll: false,
            avoidMotorway: false,
            avoidFerry: false,

            alternatives: true,
            continueStraight: false,
            
            routes: null,
            error: null,

            selectedRoute: null,

            // show map click menu
            menu: false,

            // menu position relative to map div in px
            menuX: 0,
            menuY: 0,

            // menu long, lat
            menuLL: null,

            // menu anchor location
            menuLeft: false,
            menuRight: false,
            menuTop: false,
            menuBottom: false
        }
    }
}
</script>
<style>
#panel {
    position: absolute;
    width: 400px;
    left: 0;
    height: 100%;

    overflow-y: scroll;
}
#map {
    position: absolute;
    left: 400px;
    right: 0;
    height: 100%;
}
.v-messages {
    min-height: 0px;
}
.v-input--selection-controls {
    margin-top: 0px;
    padding-top: 0px;
}
</style>
