import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import SeedDealers from './pages/SeedDealers';
import FertiliserDealers from './pages/FertiliserDealers';
import PesticideDealers from './pages/PesticideDealers';
import MspCurrent from './pages/MspCurrent';
import VeterinaryCenter from './pages/VeterinaryCentre';
import DiagnosticLaboratory from './pages/DiagnosticLaboratory';
import DiseaseAndSymptoms from './pages/DiseaseAndSymptoms';

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route exact path="/" element={ <Home /> } />

          <Route exact path="/seedDealers" element={ <SeedDealers /> } />
          <Route exact path="/fertiliserDealers" element={ <FertiliserDealers /> } />
          <Route exact path="/pesticideDealers" element={ <PesticideDealers /> } />
          <Route exact path="/mspCurrent" element={ <MspCurrent /> } />

          <Route exact path="/veterinarycentre" element={ <VeterinaryCenter /> } />
          <Route exact path="/diagnosticlaboratory" element={ <DiagnosticLaboratory /> } />
          <Route exact path="/diseaseandsymptoms" element={ <DiseaseAndSymptoms /> } />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
