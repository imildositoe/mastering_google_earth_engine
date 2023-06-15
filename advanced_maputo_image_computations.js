//// COMPUTATIONS WITH IMAGES ////
var srtm = ee.Image("CGIAR/SRTM90_V4"),
    maputo = /* color: #d63000 */ee.Geometry.Polygon(
        [[[32.41235534020745, -25.796423346876526],
          [32.347839812434195, -25.953277491083657],
          [32.537274801862594, -26.05568172245262],
          [32.81597296405779, -25.957016557703238],
          [32.83032182380885, -25.776014694146827],
          [32.60592314710322, -25.725985956971844]]]),
    polygons = /* color: #5b4cff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[31.486029227312684, -25.525471863350226],
                  [31.952948172625184, -25.530428758163744],
                  [32.178167899187684, -25.336958373875557],
                  [31.925482352312684, -25.113338441546606],
                  [31.716742117937684, -25.327028449594373]]]),
            {
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[30.217108328875184, -25.23762250405738],
                  [30.239080985125184, -25.46597316021114],
                  [30.771917899187684, -25.565121285349946],
                  [30.716986258562684, -25.14317816980265]]]),
            {
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[30.663849082450948, -25.931218711622925],
                  [30.916534629325948, -26.404510818874062],
                  [31.586700644950948, -26.049721647068292],
                  [31.081329551200948, -25.56508537199098]]]),
            {
              "system:index": "2"
            })
        ]);

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


// Get all pixels greater than 300 meters: this will create a binary image.


// Mask (set to no data) all areas below 300 meters elevation.


//////////////////////////////////////////////////////////
///   Exercise: mask areas below 1000 m from srtm      ///
//////////////////////////////////////////////////////////


// Extract areas above 1000 m.



// Mask (set to no data) all areas below 1000 meters elevation.



// Visualize the masked layer



// Export results in image format


