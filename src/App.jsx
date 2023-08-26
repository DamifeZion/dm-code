import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/exportComponent";
import { Home, Docs } from "./pages/exportPages";

import { useTheme, useMediaQuery } from "@mui/material";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("1060"));

  const mobileView = () => {
    return (
      <div className=" flex items-center justify-center w-full h-screen">
        <h1 className=" text-center font-black text-lg ">
          This Site Is Only Available On Desktops
        </h1>
      </div>
    );
  };

  const desktopView = () => {
    return (
      <BrowserRouter>
        <div className="sticky top-0 z-[100]">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/docs" element={<Docs />} />
        </Routes>
      </BrowserRouter>
    );
  };

  //BELOW RENDERS EITHER OF THE VIEWS...EDIT THE VIEWS UP INSTEAD.

  return(
    <section>
      {
      !isMobile ? desktopView() : mobileView()
      }
    </section>
  )
}

export default App;
