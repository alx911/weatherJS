class Weather{
  constructor(city, country){
    this.apiKey = 'a0c93ddd3542307335f51688e53cfef7';
    this.city = city;
    this.country = country;
    
  }

  // Fetch weather 
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
  }

  // Change location 
  changeLocation(city, country) {
    this.city = city;
    this.country = country;

  }
}