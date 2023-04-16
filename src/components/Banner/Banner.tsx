import {StyledBannerContainer, StyledButton, StyledContent, StyledInfo} from "@/components/Banner/elements";
import Image from "next/image";
import {BannerProps} from "@/components/Banner/types";

function Banner({content, image, background}: BannerProps) {
  return (
    <StyledBannerContainer container $background={background}>
      <StyledContent variant={'h3'}>
        {content}
        <StyledButton variant={'contained'} disableElevation disableRipple>Shop Now</StyledButton>
      </StyledContent>

      <Image priority src={image} alt={content} width={350} height={400} style={{objectFit: 'contain'}}/>

      <StyledInfo>
        <a
          href="https://www.freepik.com/free-photo/abstract-smooth-brown-wall-background-layout-design-studio-room-web-template-business-report-with-smooth-circle-gradient-color_16788900.htm#from_view=detail_author">Image
          by benzoix</a> on Freepik
      </StyledInfo>
    </StyledBannerContainer>
  )
}

export default Banner