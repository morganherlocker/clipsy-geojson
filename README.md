clipsy-geojson
==============

**conversion module for clipsy and geojson**

###install

```
npm install clipsy-geojson
```

###test

```
npm test
```

###use

```js
var cg = require('clipsy-geojson')

var geojsonData = {
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

//convert to clipsy
var clipsyData = cg.toClipsy(geojsonData)

//convert back to geojson
var geo = cg.toGeojson(clipsyData)
```