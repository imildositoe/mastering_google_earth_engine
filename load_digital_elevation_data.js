//// LOAD AND VISUALIZE DATA ////


// Load SRTM Digital Elevation Data Version 4 from search bar.
// Rename it to srtm.
// Print it.
print(srtm)


// Display the image.


// Add visualization parameters.
// Available parameters can be found in the ee.data.getMapId() function documentation.
var vp = {
  bands: 'elevation',
  min: 0,
  max: 6000,
  palette: ['green', 'yellow', 'red', 'white']
}

Map.addLayer(srtm, vp, 'srtm');



// Load feature collection of Montes Mazambulo



// Print it.
print(mazambulo)


// Display the feature collection and color it in red.
Map.centerObject(mazambulo, 10)
Map.addLayer(mazambulo, {color: 'red'}, 'mazambulo');


// Load Landsat 8 Annual Greenest-Pixel TOA Reflectance Composite from search bar.
// Rename it to greenestPixel.
// Print it.
print(gp)


// Load the 2017 composite and name it green2017.
var gp2017 = ee.Image('LANDSAT/LC8_L1T_ANNUAL_GREENEST_TOA/2017');
print(gp)


// You can also select the image by applying a filter by date function, in two ways:

//green2017 = greenest.filterDate('2017');
//green2017 = greenest.filter(ee.Filter.date('2017'));
// Display it in real colors.
var vpreal = {
    bands: ['B4', 'B3', 'B2'],
    min: 0.05,
    max: 0.3
  }
  
  Map.addLayer(gp2017, vpreal, 'real color')


// Display it in false colors to highlight vegetation.
var vpfalse = {
    bands: ['B5', 'B4', 'B3'],
    min: 0.05,
    max: 0.3
  }
  
  Map.addLayer(gp2017, vpfalse, 'false color')


// Calculate NDVI doing band math.
var nir = gp2017.select('B5')
var red = gp2017.select('B4')
var ndvi = nir.subtract(red).divide(nir.add(red)).rename('NDVI')


// Print NDVI and display it.
print(ndvi)


// Calculate NDVI using normalizedDifference function.



// Load ASTER GDEM tiles of the Montes Mazambulo from own assets.



// Put the tiles in a collection.



// Print the collection.

