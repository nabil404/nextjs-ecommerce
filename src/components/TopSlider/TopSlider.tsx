import Carousel from "@/components/Carousel";
import Image from "next/image";
import {SliderWrapper} from "@/components/TopSlider/elements";
import {Settings} from "react-slick";

function TopSlider() {

  const settings: Settings = {
    autoplay: false,
    autoplaySpeed: 3000
  }

  return (
    <SliderWrapper>
      <Carousel settings={settings}>
        <Image src={'https://fakeimg.pl/800x400/'} alt={'demo-1'} width={800} height={400}/>
        <Image src={'https://fakeimg.pl/800x400/'} alt={'demo-1'} width={800} height={400}/>
        <Image src={'https://fakeimg.pl/800x400/'} alt={'demo-1'} width={800} height={400}/>
        <Image src={'https://fakeimg.pl/800x400/'} alt={'demo-1'} width={800} height={400}/>
      </Carousel>
    </SliderWrapper>
  )
}

export default TopSlider