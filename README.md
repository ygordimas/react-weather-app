# Weather Forecast App
---
>Status: Completed
---
>Authors: Ygor Dimas
---
>Contact: [Linkedin](https://www.linkedin.com/in/ygor-dimas/)
---
>Click [here](https://ygordimas.github.io/react-weather-app/) to access the project's **GitHub Page**
---

# Overview

The aplication was developed as a complement for my studies of React and TypeScript. It consists of a weather forecast aplication capable of fetching current weather and forecast data of a specific location from the Open Weather API. The user must provide a valid combination of zipcode and country name in order for it to work.
The data retrieved from the API is loaded and displayed on the page through a combination of cards carrying the information. 

This is an updated version of an older Weather App that I was able to develop earlier using HTML, CSS and JavaScript (it can be found [here](https://github.com/ygordimas/previsao-do-tempo)). Some of it's aspects left me unsatisfied so I thought I would make another version with improvements. The older project was only capable of fetching data from a valid zipcode from Brazil through a faulty API and it had no actual proper handling of errors besides a basic check for valid inputs.

## Objectives

As mentioned before, this exercise was an opportunity to put into practice some of React's concepts and TypeScript's implementations that I have come into contact lately.
It was also an opportunity to understand how to do a better job of managing and handling errors, either from defective inputs or bad responses from API calls.

## Frontend Topics and Technologies

- Reusable components
- React hooks (useState, useEffect, useContext)
- Asynchronous JavaScript
- Conditional Rendering
- Trycatch for handling errors
- Visual feedback for errors
- Styling in React with styled-components

## Results

![Weather Forecast Application](https://github.com/ygordimas/react-weather-app/blob/main/public/images/1920_1080_initial-screen.png?raw=true)
![Weather Forecast Application displaying list of available countries](https://github.com/ygordimas/react-weather-app/blob/main/public/images/1920_1080-country-search.png?raw=true)
![Weather Forecast Application displaying search results](https://github.com/ygordimas/react-weather-app/blob/main/public/images/1920_1080-displaying-weather.png?raw=true)
![Weather Forecast Application displaying error message for when there are no valid inputs](https://github.com/ygordimas/react-weather-app/blob/main/public/images/1920_1080-handling-error-1.png?raw=true)
![Weather Forecast Application displaying error message for invalid zipcode](https://github.com/ygordimas/react-weather-app/blob/main/public/images/1920_1080-handling-error-2.png?raw=true)
![Weather Forecast Application responsive display with a 768 pixel breakpoint](https://github.com/ygordimas/react-weather-app/blob/main/public/images/768_1080-current-weather.png?raw=true)
![Weather Forecast Application responsive display with a 576 pixel breakpoint](https://github.com/ygordimas/react-weather-app/blob/main/public/images/576_1125-current-weather.png?raw=true)

