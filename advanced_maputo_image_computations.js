//// COMPUTATIONS WITH IMAGES ////
var srtm = ee.Image("CGIAR/SRTM90_V4"),
    maputo = /* color: #d63000 */ee.Geometry.Polygon(
        [[[32.41235534020745, -25.796423346876526],
          [32.347839812434195, -25.953277491083657],
          [32.537274801862594, -26.05568172245262],
          [32.81597296405779, -25.957016557703238],
          [32.83032182380885, -25.776014694146827],
          [32.60592314710322, -25.725985956971844]]]),
    dem1 = ee.Image("users/sitoeimildo/montes1");

// Load SRTM Digital Elevation Data Version 4 from search bar.
// Rename it to srtm.
// Calculate terrain products and print the result.
var terrain = ee.Terrain.products(srtm);
print(terrain);

// Select the hillshade band and display it.
var hs = terrain.select('hillshade');

// Display it.
var vp = {
  bands: 'hillshade',
  min: 60,
  max: 230,
  palette : ['green', 'yellow', 'grey']
};

Map.addLayer(hs, vp, 'hillshade');

/// Calculate mean elevation in a region.
// Create geometry using GUI tool and call it polygon.
// Print the geometry.
print(maputo);

// Calculate mean elevation inside geometry.
var meanElev = srtm.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: maputo
});

print('Mean elevation in Maputo', meanElev);

/////////////////////////////////////////////////////////////////////////
// Exercise: apply the reduceRegions function with a FeatureCollection //
/////////////////////////////////////////////////////////////////////////

// Create 3 polygons in a new layer
print(polygons);

// Calculate the mean elevation for the three polygons using reduceRegions
var meanElev = srtm.reduceRegions({
  collection: polygons,
  reducer: ee.Reducer.mean()
});

// Print the results
print('Mean elevation', meanElev);

// Export results as table
Export.table.toDrive({
  collection: meanElev,
  description: 'mean_elevation',
  folder: 'wfp_mozambique_training',
  selectors: 'mean',
  fileFormat: 'SHP'
});

// Calculate and apply a mask
// Load the ASTER GDEM (montes1, montes2) from your assets.
var dem2 = ee.Image('users/sitoeimildo/montes2');
print(dem2);


// Put the tiles in an image collection.
var col = ee.ImageCollection([dem1, dem2]);
print(col);


// Mosaic the tiles into a single image.
var mosaic = col.mosaic();
print(mosaic);

var vp = {
    bands: 'b1',
    min: 20,
    max: 800,
    palette: ['green', 'yellow', 'orange', 'brown']
  }
  
  Map.addLayer(mosaic, vp);

// Get all pixels greater than 300 meters: this will create a binary image.
var mask = mosaic.gt(300)
Map.addLayer(mask);

// Mask (set to no data) all areas below 300 meters elevation.
var mosaicMasked = mosaic.updateMask(mask);
Map.addLayer(mosaicMasked, vp, 'masked');


//////////////////////////////////////////////////////////
///   Exercise: mask areas below 1000 m from srtm      ///
//////////////////////////////////////////////////////////


// Extract areas above 1000 m.



// Mask (set to no data) all areas below 1000 meters elevation.



// Visualize the masked layer



// Export results in image format


