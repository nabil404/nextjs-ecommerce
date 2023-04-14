import {styled, TextField} from "@mui/material";
import {brown} from "@mui/material/colors";

// shouldForwardProp: prop => !prop.toString().startsWith('$'),
export const Desktop = styled('div')`
  @media (max-width: 768px) {
    display: none !important;
  }
`;
export const Mobile = styled('div')`
  @media (min-width: 769px) {
    display: none !important;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    .Mui-focused {
      fieldset {
        border-color: ${brown[400]};
      }
    }

    input {
      height: 1rem;
    }
  }
`