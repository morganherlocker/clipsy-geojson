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
  type: 'FeatureCollection',
  features: [
    // collection of polygon features
  ]
}

//convert to clipsy
var clipsyData = cg.toClipsy(geojsonData)

//convert back to geojson
var geo = cg.toGeojson(clipsyData)
```