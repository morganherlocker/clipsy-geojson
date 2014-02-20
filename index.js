var _ = require('lodash')

module.exports = {
  toClipsy: function(geojson) {
    var clipsy = []

    if(geojson.geometry.type = 'Polygon'){
      _.each(geojson.geometry.coordinates, function(ring, i){
        // push array for new ring
        clipsy.push([])

        if(i === 0){
          // add outer ring clockwise
          _.each(ring, function(pair){
            clipsy[i].push({X: scale(pair[0]), Y: scale(pair[1])})
          })
        }
        else{
          // add pairs counterclockwise
          _.each(ring, function(pair, i){
            
          })
        }
      })
    }
    return clipsy
  },
  toGeojson: function(clipsy) {
    var geojson = {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": []
      }
    }

    _.each(clipsy, function(ring, i){
      // add a new ring
      geojson.geometry.coordinates.push([])
      _.each(ring, function(pair){
        geojson.geometry.coordinates[i].push([scaleDown(pair.X), scaleDown(pair.Y)])
      })

      // if last coordinate does not repeat first, copy first to last
      if(geojson.geometry.coordinates[i][0] != geojson.geometry.coordinates[i][geojson.geometry.coordinates[i].length - 1]){
        geojson.geometry.coordinates[i].push(geojson.geometry.coordinates[i][0])
      }
    })

    return geojson
  }
}

function scale(num){
  return Math.round(num * 1000000000000) 
}

function scaleDown(num){
  return num / 1000000000000
}