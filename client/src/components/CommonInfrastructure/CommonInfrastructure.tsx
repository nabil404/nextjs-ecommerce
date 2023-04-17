import {PropsWithChildren} from "react";
import {CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import Layout from "@/components/Layout";

//TODO remove to another file
const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: [
      'Ubuntu',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

function CommonInfrastructure({children}: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Layout>
        {children}
      </Layout>
    </ThemeProvider>
  );
}

export default CommonInfrastructure;