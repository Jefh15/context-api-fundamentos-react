import Navbar from "./components/Navbar";


// importo mi provider
import ThemeProvider from "./context/ThemeProvider";



function App() {

  return (


    <ThemeProvider>
      {/* importo mi componente */}
      <Navbar
      // le paso mis propiedades

      />
    </ThemeProvider>
  );
}

export default App;
