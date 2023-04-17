import Carousel from "@/components/Carousel";
import {Settings} from "react-slick";
import {Grid} from "@mui/material";
import Banner from "@/components/Banner";
import {BannerData} from "@/common/__temp__/BannerData";

function TopSlider() {

  const settings: Settings = {
    autoplay: false,
    autoplaySpeed: 3000,
  }

  return (
    <Grid>
      <Carousel settings={settings}>
        {BannerData.map((data, index) =>
          <Banner
            key={index}
            content={data.content}
            image={data.image}
            background={data.background}
          />)}
      </Carousel>
    </Grid>
  )
}

export default TopSlider