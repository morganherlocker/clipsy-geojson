var cg = require('./index.js'),
    should = require('should')

var geojson = {
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

var clipsy = [[{X:-85535087585449,Y:33287776936779},{X:-85535087585449,Y:33327516259237},{X:-85438957214355,Y:33327516259237},{X:-85438957214355,Y:33287776936779}]];

describe('clipsy-geojson', function(){
  describe('toClipsy()', function(){
    it('should take a geojson featurecollection and return the equivalent clipsy paths', function(){
      var res = cg.toClipsy(geojson)
      res.should.be.ok
      res[0][0].X.should.be.ok
    })
  })
  describe('toGeojson()', function(){
    it('should take a clipsy path array and return the equivalent geojson featurecollection', function(){
      var res = cg.toGeojson(clipsy)
      res.should.be.ok
      res.geometry.coordinates[0][0].should.be.ok
    })
  })
})






