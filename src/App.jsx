import React from 'react';
import DataComponent from './Utils/DataComponent';
import CardComp from './components/CardComp'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <div>

        <DataComponent>
          <CardComp />
        </DataComponent>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;