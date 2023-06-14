//// COMPUTATIONS WITH IMAGES ////



// Load SRTM Digital Elevation Data Version 4 from search bar.
// Rename it to srtm.
// Calculate terrain products and print the result.
var terrain = ee.Terrain.products(srtm);
print(terrain);


// Select the slope band and display it setting the map center to the
// Drakensberg mountains.



/// Select aspect band and calculate eastness (sin of aspect).



// Convert to radians, compute the sin of the aspect.



// Display it.


var ns = terrain.select('hillshade');

var vp = {
  bands: 'hillshade',
  min: 60,
  max: 230,
  palette: ['green', 'yellow', 'red']
}

Map.addLayer (ns, vp, 'hillshade')

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


// The calculation returns a dictionary with the results.



/// Calculate area above 800 meters.
// Get all pixels greater than 800 meters: this will create a binary image.



// Mask (set to no data) all areas below 800 meters elevation.



// Calculate area above 800 meters within polygon.



// Transform m2 to km2.



// Create a new polygon layer and with a few polygons. Go to the polygon setting and
// convert it to a feature collection. Rename it collection.
//Print the feature collection.



// Calcuate the area above 800 meters within each polygon.



// Export results in table format.



// You can do the same thing by mapping a function to each
// polygon in the collection.


////////////////////////////////////////////////////////////////////////////
///   Exercise: calculate the area above 600 meters in Montes Mazambulo  ///
////////////////////////////////////////////////////////////////////////////

// Load the Montes Mazambulo feature collection from your asset.



// Load the ASTER GDEM (montes1, montes2) from your assets.



// Put the tiles in an image collection.



// Mosaic the tiles into a single image.



// Extract areas above 600 m.



// Mask (set to no data) all areas below 600 meters elevation.



// Calculate area above 600 meters within each polygon
// using reduceRegions.



// Export results in table format including both mountain name and
// the sum.

