// convert.js				Dave Reed
// Functions for converting between English and Metric values
///////////////////////////////////////////////////////////////

function InchesToCentimeters(inches) 
// Assumes: inches is a distance, measured in inches 
// Returns: the corresponding distance in centimeters
{
  var cm;

  cm = inches * 2.54;
  return cm;
}

function CentimetersToInches(cm) 
// Assumes: cm is a distance, measured in centimeters 
// Returns: the corresponding distance in inches
{
  var inches;

  inches = cm / 2.54;
  return inches;
}