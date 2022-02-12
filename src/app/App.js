import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import PagesRoutes from './routes';
import Notes from '../pages/notes';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={PagesRoutes.HOME} element={<Notes />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
