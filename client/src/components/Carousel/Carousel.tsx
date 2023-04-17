import {PropsWithChildren, useMemo} from "react";
import {merge} from "lodash";
import {CarouselProps} from "@/components/Carousel/types";
import {StyledSlider} from "@/components/Carousel/elements";

export const carouselDefaultSettingsSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Carousel({settings = {}, children}: PropsWithChildren<CarouselProps>) {

  const sliderSettings = useMemo(() => merge(carouselDefaultSettingsSettings, settings), [settings])

  return (
    <StyledSlider {...sliderSettings}>
      {children}
    </StyledSlider>
  );
}

export default Carousel