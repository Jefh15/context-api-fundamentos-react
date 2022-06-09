// importo mi provider
import ThemeProvider from "./context/ThemeProvider";
import HolaProvider from "./context/HolaProvider";


// importo mis componentes
import Navbar from "./components/Navbar";
import Principal from "./components/Principal";


function App() {

  return (

    // le paso mi context o provider
    <ThemeProvider>

      {/* // le paso mi context o provider */}
      <HolaProvider>

        {/* importo mi componente */}
        <Navbar />
        {/* importo mi componente */}
        <Principal />


      </HolaProvider>
    </ThemeProvider>
  );
}

export default App;
