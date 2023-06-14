//// LOAD AND VISUALIZE DATA ////


// Load SRTM Digital Elevation Data Version 4 from search bar.
// Rename it to srtm.
// Print it.
console.log(srtm)


// Display the image.
Map.addLayer(srtm);


// Add visualization parameters.
// Available parameters can be found in the ee.data.getMapId() function documentation.
var vp = {
  
}



// Load feature collection of Montes Mazambulo



// Print it.



// Display the feature collection and color it in red.



// Load Landsat 8 Annual Greenest-Pixel TOA Reflectance Composite from search bar.
// Rename it to greenestPixel.
// Print it.



// Load the 2017 composite and name it green2017.



// You can also select the image by applying a filter by date function, in two ways:

//green2017 = greenest.filterDate('2017');
//green2017 = greenest.filter(ee.Filter.date('2017'));
// Display it in real colors.



// Display it in false colors to highlight vegetation.



// Calculate NDVI doing band math.



// Print NDVI and display it.



// Calculate NDVI using normalizedDifference function.



// Load ASTER GDEM tiles of the Montes Mazambulo from own assets.



// Put the tiles in a collection.



// Print the collection.

