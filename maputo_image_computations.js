//// COMPUTATIONS WITH IMAGES ////
var srtm = ee.Image("CGIAR/SRTM90_V4"),
    maputo = /* color: #d63000 */ee.Geometry.Polygon(
        [[[32.46812542456033, -26.017761203825547],
          [32.49148555233936, -26.07698403423179],
          [32.52444855705855, -26.148547586141284],
          [32.67143880099184, -26.13004894943175],
          [32.713337644810736, -25.989981214393485],
          [32.55604471206905, -25.941196093658416]]]),
    multiple_maputo = /* color: #c26aff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[32.1338026760776, -25.99204632282192],
                  [32.01913287627291, -26.05806758557697],
                  [32.21894671904635, -26.069170314759877],
                  [32.21276690947604, -25.924752858894493],
                  [32.08161761748385, -25.91425408091159]]]),
            {
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[32.2546522854526, -25.903754368117706],
                  [32.225813174124475, -25.98649143948639],
                  [32.44073321806979, -26.05745073643614],
                  [32.30477740752291, -25.864835520940588]]]),
            {
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[32.45721271025729, -25.952539227454853],
                  [32.53823688017916, -25.92104751460172],
                  [32.44485309111666, -25.852477649600527],
                  [32.6226942776401, -25.898813003415693],
                  [32.7819960354526, -25.878427687022782],
                  [32.607588076468225, -25.80797862099341],
                  [32.69479205596041, -25.81848684461916],
                  [32.70783832060885, -25.713362697375178],
                  [32.462019228811975, -25.730683664920484],
                  [32.571882510061975, -25.71150672982451],
                  [32.4139540432651, -25.71212538889137],
                  [32.371382021780725, -25.81477816625815]]]),
            {
              "system:index": "2"
            })]);


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

//CHALLENGE
//Create 3 polygons in a new layer

//Calculate the mean elevation for the three polygons
//TIP: .reduceRegions
var multipleMeanElev = srtm.reduceRegions({
    collection: multiple_maputo,
    reducer: ee.Reducer.mean()
  })
  
  //Print the results
  print(multipleMeanElev);


//Export the results
Export.table.toDrive({
    collection: multipleMeanElev,
    folder: 'wfp_mozambique_training',
    selectors: 'mean',
    fileFormat: 'SHP'
})

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

