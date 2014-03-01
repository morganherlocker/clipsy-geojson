var cg = require('./index.js'),
    should = require('should')

var geojsonPolygon = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          -85.53508758544922,
          33.28777693677941
        ],
        [
          -85.53508758544922,
          33.32751625923708
        ],
        [
          -85.43895721435547,
          33.32751625923708
        ],
        [
          -85.43895721435547,
          33.28777693677941
        ],
        [
          -85.53508758544922,
          33.28777693677941
        ]
      ]
    ]
  }
}

var geojsonMultiPolygon = {
      "type": "Feature",
      "properties": {},
      "geometry": {
    "type": "MultiPolygon", 
    "coordinates": [
      [
        [[40, 40], [20, 45], [45, 30], [40, 40]]
      ], 
      [
        [[20, 35], [10, 30], [10, 10], [30, 5], [45, 20], [20, 35]], 
        [[30, 20], [20, 15], [20, 25], [30, 20]]
      ]
    ]
  }
}


var clipsy = [[{X:-85535087585449,Y:33287776936779},{X:-85535087585449,Y:33327516259237},{X:-85438957214355,Y:33327516259237},{X:-85438957214355,Y:33287776936779}]];

describe('clipsy-geojson', function(){
  describe('toClipsy()', function(){
    xit('should take a geojson Polygon and return the equivalent clipsy paths', function(){
      var res = cg.toClipsy(geojsonPolygon)
      res.should.be.ok
      res[0][0].X.should.be.ok
    })
  })
  describe('toGeojson()', function(){
    xit('should take a clipsy path array and return the equivalent geojson Polygon', function(){
      var res = cg.toGeojson(clipsy)
      res.should.be.ok
      res.geometry.coordinates[0][0].should.be.ok
    })
  })
  describe('toClipsy()', function(){
    it('should take a geojson MultiPolygon and return the equivalent clipsy paths', function(){
      var res = cg.toClipsy(geojsonMultiPolygon)
      res.should.be.ok
      res[0][0].X.should.be.ok
      res[1][0].X.should.be.ok
    })
  })
})






