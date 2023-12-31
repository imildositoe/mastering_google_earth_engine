//// COMPOSITING IMAGES ////
var L9 = ee.ImageCollection("LANDSAT/LC09/C02/T1_TOA"),
    montes = ee.FeatureCollection("users/sitoeimildo/montes_mazambulo"),
    S2 = ee.ImageCollection("COPERNICUS/S2")
;

// Load USGS Landsat 9 Collection 2 Tier 1 TOA Reflectance from search bar
// Rename it L9.
// Load the Appennino Tosco-Emiliano feature collection from your assets.



// Count all the images in the collection.
print(L9.size())


// Filter image collected in 2022 in Montes Mazambulo.
var filtered = L9.filterDate('2022-01-01', '2022-12-31')
  .filterBounds(montes);

print(filtered.size());


// Display the collection.
var visPar = {
    bands: ['B4', 'B3', 'B2'],
    min: 0.05,
    max: 0.15
  }
  
  Map.centerObject(filtered);
  Map.addLayer(filtered.mean(), visPar, 'true color');


// Display median composite.
Map.centerObject(montes);
Map.addLayer(filtered.median(), visPar, 'true color');


// Create a function than adds an NDVI band to the collection.
var addNDVI = function(img) {
    var ndvi = img.normalizedDifference(['B5', 'B4']).rename('ndvi');
    return img.addBands(ndvi)
}


// Map the function on the image collection.
var withNDVI = filtered.map(addNDVI);
print(withNDVI);

var vpNDVI = {
  bands: 'ndvi',
  min: 0,
  max: 0.8,
  palette: ['black', 'purple', 'yellow', 'red']
}


// Create greenest pixel composite and display it.
var gp = withNDVI.qualityMosaic('ndvi');
Map.addLayer(gp, visPar, 'greenest pixel');


// Clip greenest pixel to Montes Mazambulo.
var clipped = gp.clip(montes)
Map.addLayer(clipped, visPar, 'clipped');
print(clipped);


// Export greenest pixel composite to Google Drive.
Export.image.toDrive({
    image: clipped.select(['B4', 'B3', 'B2']),
    description: 'clipped',
    folder: 'wfp_mozambique_training',
    scale: 30,
    region: montes
});


/////////////////////////////////////////////////////////////////////////////////////
///        Exercise: create greenest pixel composite using Sentinel 2 data.       ///
/////////////////////////////////////////////////////////////////////////////////////

// Load Sentinel-2 MSI: MultiSpectral Instrument, Level-1C.


// Filter by date and area to match Landsat 9 data.
var filtered2 = S2.filterDate('2022-01-01', '2022-12-31')
  .filterBounds(montes);


// Print it (check band names, etc).
print('Filtered Sentinel', filtered2);


// Adapt function to calculate NDVI over the Sentinel 2 collection.
var addNDVISent = function(img) {
    var ndvi = img.normalizedDifference(['B8', 'B4']).rename('ndviSent');
    return img.addBands(ndvi)
  }
  
  var withNDVISent = filtered2.map(addNDVISent);
  print(withNDVISent);


// Make greenest pixel composite.
var gpSent = withNDVISent.qualityMosaic('ndviSent');


// Visualize it on the map.
var vpNDVISent = {
    bands: ['B4','B3','B2'],
    min: 0,
    max: 3000
  }
  Map.addLayer(gpSent, vpNDVISent, 'greenest pixel sentinel');