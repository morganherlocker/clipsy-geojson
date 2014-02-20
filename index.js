var _ = require('lodash')

module.exports = {
  toClipsy: function(geojson) {
    var clipsy = []

    if(geojson.geometry.type = 'Polygon'){
      _.each(geojson.geometry.coordinates, function(ring, i){
        // add outer ring clockwise
        if(i === 0){
          _.each(ring, function(pair, i){
            
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

  }
}