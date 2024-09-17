import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const CardWeather = ({ info }) => {
  
const COLD_URL="https://media.istockphoto.com/id/811485572/photo/dark-storm-clouds-over-a-dirt-road.jpg?s=2048x2048&w=is&k=20&c=O1qnA6qr6HZ1FzbgbwHpqcrquniftgMstZt2uJ5FrMY="
const HOT_URL="https://media.istockphoto.com/id/1303405311/photo/solar-skies.webp?b=1&s=170667a&w=0&k=20&c=0S0DNyJvQ-Lo67Wz9-PlCFHAPfLEePnifrUOGjpcVbM="
const RAIN_URL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=2048x2048&w=is&k=20&c=ky5JTM-ZpKr0zoDfB4jnatyATQ-5ZG7kdg9vU8ndrww="
  return (
    <div className="shadow-xl pb-4 bg-pink-100 mr-4 ml-4 mt-4">
      <div className="bg-pink-100 ml-[600px] mr-[600px] ">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={info.humidity > 80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? <WaterDropIcon/> : info.temp>15 ? <WbSunnyRoundedIcon/>: <AcUnitIcon/> }
            </Typography>
            <Typography variant="body2">
              Temprature:{info.temp}&deg;C
              <br />
              Max.Temp:{info.max_temp}&deg;C
              <br />
              Min.Temp:{info.min_temp}&deg;C
              <br />
              Humidity:{info.humidity}&deg;C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardWeather;
