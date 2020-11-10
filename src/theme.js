import { StylesContext } from "@material-ui/styles"
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9c27b0',
    },
    secondary: {
      main: '#d05ce3',
    },
  }
})

export default theme;