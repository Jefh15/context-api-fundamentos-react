// importo mi provider
import ThemeProvider from "./context/ThemeProvider";

// importo mis componentes
import Navbar from "./components/Navbar";
import Principal from "./components/Principal";


function App() {

  return (


    <ThemeProvider>
      {/* importo mi componente */}
      <Navbar />
      {/* importo mi componente */}
      <Principal />
    </ThemeProvider>
  );
}

export default App;
