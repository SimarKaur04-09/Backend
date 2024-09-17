import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";

export const Prac = ({ updateInfo }) => {
  let [city, setCity] = useState();
let[error,setError]=useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "56e8d872793e8decbba95985c141675e";

  let getWeatherInfo = async () => {
    try{
    let response = await fetch(
      `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
    );


    let responseJson = await response.json();

    let result = {
      city: city,
      temp: responseJson.main.temp,
      tempMax: responseJson.main.temp_max,
      tempMin: responseJson.main.temp_min,
      humidity: responseJson.main.humidity,
    };
    console.log(result);
    return(result);
  } catch (err) {
    throw err;
  }
};

  {
    /*let fetchUsers=fetch("https://api.github.com/users")
  console.log(fetchUsers)
  async function getWeather(){
      let response=await fetch("https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=56e8d872793e8decbba95985c141675e")
      let data=await response.json();
      console.log(data)
      
setWeather(data)
  }
  getWeather();
  },[])*/
  }
  let handleChange = (e) => {
    setCity(e.target.value);
  };
  

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };


  return (
    <div className="text-purple-950 font-bold text-center text-5xl font-serif pt-4 shadow-xl pb-4 bg-blue-100 mr-4 ml-4 mt-4">
      WEATHER APP
      <p className="text-2xl ml-[1200px]">By Simar </p>
      <form className="mt-2" onSubmit={handleSubmit}>
        <div>
          <TextField
            required
            id="outlined-required"
            value={city}
            label="Enter the City Name"
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Search
          </Button>
        </div>
      </form>
      {error && <p className="text-red-500 text-center">Invalid City Name</p>}

    </div>
  );
};
