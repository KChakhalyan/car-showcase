/**
 * Fetches a list of cars from the API.
 * @returns Promise resolving to the list of cars.
 */
export async function fetchCars() {
   // Set the headers for the API request
   const headers: HeadersInit | undefined = {
      "X-RapidAPI-Key": "01396710e0msh0d7d11ca5ef3a02p14261ajsn388f55887182",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
   };

   // Send a GET request to the API endpoint
   const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera", {
      headers: headers,
   });

   // Parse the response as JSON
   const result = await response.json();

   // Return the list of cars
   return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
   const basePricePerDay = 50; // Base rental price per day in dollars
   const mileageFactor = 0.1; // Additional rate per mile driven
   const ageFactor = 0.05; // Additional rate per year of vehicle age

   // Calculate additional rate based on mileage and age
   const mileageRate = city_mpg * mileageFactor;
   const ageRate = (new Date().getFullYear() - year) * ageFactor;

   // Calculate total rental rate per day
   const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

   return rentalRatePerDay.toFixed(0);
};
