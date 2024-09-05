import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../src/Containers/Main';
import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
  palette: {
    primary: { main: '#64dd17' },
    secondary: { main: '#64dd17' }
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#64dd17',
      },
    },
    MuiPickersToolbarText: {
      toolbarTxt: {
        color: '#fff'
      },
      toolbarBtnSelected: {
        color: '#fff'
      }
    },
    MuiPickersDay: {
      daySelected: {
        color: '#fff'
      }
    },
    MuiPickersClockNumber: {
      clockNumberSelected: {
        color: '#fff'
      }
    }
  },
});

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* Add more routes here */}
        </Routes>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
