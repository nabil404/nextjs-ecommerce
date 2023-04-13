import { styled } from "@mui/material";

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