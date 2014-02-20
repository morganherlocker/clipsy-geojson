var cg = require('./index.js'),
    should = require('should')

var geojson = {
  "type": "FeatureCollection",
  "features": [
    {
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
  ]
}

var clipsy = [[{X:-85.53508758544922,Y:33.28777693677941},{X:-85.53508758544922,Y:33.32751625923708},{X:-85.43895721435547,Y:33.32751625923708},{X:-85.43895721435547,Y:33.28777693677941}]];

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
      res.features[0].should.be.ok
    })
  })
})






