import {styled} from "@mui/material";
import Slider from "react-slick";
import {blue} from "@mui/material/colors";

export const StyledSlider = styled(Slider)`
  && {
    .slick-dots {
      height: 1.75rem;
      left: 50%;
      transform: translateX(-50%);
      width: fit-content;
      bottom: 1rem;
      border-radius: .75rem;
      background: ${props => props.theme.palette.grey[700]};
      opacity: 0.2;
      padding: 0 .5rem;

      &:hover {
        opacity: 1;
      }

      li {
        width: 1rem;
        height: 1rem;
        background: ${props => props.theme.palette.grey[300]};
        border-radius: 50%;
        top: -2px;
        button {
          &:before {
            content: '';
          }
        }
      }

      .slick-active {
        background: ${blue[400]};
        border-radius: 50%;
      }
    }
  }
`