const moment = require('moment-timezone');

/**
 * This function takes a city name as input, retrieves the current date, day, and time in that city's timezone,
 * and serves it to the hbs template engine.
 *
 * @param {string} city - The name of the city to retrieve the date, day, and time for.
 * @returns {string} - A string containing the current date, day, and time in the specified city's timezone.
 */
function getDateDayTime(city) {
  try {
    // Replace any spaces in the city name with underscores
    const formattedCity = city.replace(/\s+/g, '_');

    // Get the timezone for the specified city
    const timezone = moment.tz.guess(true, { cityName: formattedCity });

    // Get the current date, day, and time in the specified city's timezone
    const now = moment().tz(timezone);
    const date = now.format('MMMM Do, YYYY');
    const day = now.format('dddd');
    const time = now.format('h:mm:ss A');

    // Return the formatted date, day, and time
    return `${day}, ${date}, ${time}`;
  } catch (error) {
    // Log any errors that occur
    console.error(error);
    return '';
  }
}

// Export the function for use in other modules
module.exports = {getDateDayTime};