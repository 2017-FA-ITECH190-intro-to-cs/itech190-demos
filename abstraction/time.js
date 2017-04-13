// time.js				Dave Reed
// Functions for converting units of time
///////////////////////////////////////////////////////

function SecondsToString(seconds)
// Assumes: seconds is a number of seconds
// Returns: a string that breaks down that number of
//          seconds; e.g., 10,000 seconds --> 
//          "0 days, 2 hours, 46 minutes, 40 seconds"
{
  var days, hours, minutes, seconds;
  
  days = Math.floor(seconds / (24*60*60));
  seconds = seconds - days*(24*60*60);
  hours = Math.floor(seconds / (60*60));
  seconds = seconds - hours*(60*60);
  minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes*60;

  return days + ' days, ' + hours + ' hours, ' + 
         minutes + ' minutes, ' + seconds + ' seconds';
}
  
  
function SecondsUntil(dateString)
// Assumes: dateString describes a date and time; e.g.,
//          "May 25, 2020 17:23:00"
// Returns: the number of seconds from now until that time
{
  var goalDate, current, diff;
  
  goalDate = new Date(dateString);
  current = new Date();
  diff = Math.floor((goalDate - current)/1000);
    
  return diff;
}


function TimeUntil(dateString)
// Assumes: dateString describes a date and time; e.g.,
//          "May 25, 2020 17:23:00"
// Returns: a string describing the time remaining until
//          the dateString date & time
{
  var seconds, time;
  
  seconds = SecondsUntil(dateString);
  time = SecondsToString(seconds);
  
  return time;
}


function CurrentTime()
// Returns: the current time (in military time); e.g.,
//          17:23:00 for 5:23 pm.
{
  var current, hours, minutes, seconds;
  
  current = new Date();  
  hours = current.getHours();
  minutes = current.getMinutes();
  seconds = current.getSeconds();

  return PadWithZeros(hours, 2) + ':' + 
         PadWithZeros(minutes, 2) + ':' + 
         PadWithZeros(seconds, 2);
}


function PadWithZeros(number, width)
// Assumes: number is an integer to be formatted,
//          width is the desired format width
// Returns: a string representation of number with 
//          leading zeros to achieve the desired width
{
  var str;
  
  str = "" + number;
  while (str.length < width) {
    str = "0" + str;
  }
  return str;
}
