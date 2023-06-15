//// COMPOSITING IMAGES ////
var L9 = ee.ImageCollection("LANDSAT/LC09/C02/T1_TOA"),
    montes = ee.FeatureCollection("users/sitoeimildo/montes_mazambulo")
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



// Create greenest pixel composite and display it.



// Clip greenest pixel to Montes Mazambulo.



// Export greenest pixel composite to Google Drive.



/////////////////////////////////////////////////////////////////////////////////////
///        Exercise: create greenest pixel composite using Sentinel 2 data.       ///
/////////////////////////////////////////////////////////////////////////////////////

// Load Sentinel-2 MSI: MultiSpectral Instrument, Level-1C.



// Filter by date and area to match Landsat 9 data.



// Print it (check band names, etc).



// Adapt function to calculate NDVI over the Sentinel 2 collection.



// Make greenest pixel composite.



// Visualize it on the map.
