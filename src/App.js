import './App.css';
import { IrrigationSystemDesignHeader } from './ui-components';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EToModalComponent from './components/EToModalComponent';
import { withAuthenticator } from '@aws-amplify/ui-react';


function App({ user, signOut }) {
  console.log(user)
  const [eto, setEto] = useState(0);
  const [showEtoComponent, setShowEtoComponent] = useState(false);


  const irrigationSystemDesignHeaderOverrides = {
    Evapotranspiration: {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setShowEtoComponent(true);
      }
    }
  }


  return (
    <div className="App">
      <IrrigationSystemDesignHeader
        overrides={irrigationSystemDesignHeaderOverrides}
      />
      <div>Eto: {eto}</div>
      <EToModalComponent
        showModal={showEtoComponent}
        onClose={() => setShowEtoComponent(false)}
        eto={eto}
        setEto={(newEto) => setEto(newEto)}
      />
    </div>
  );
}

export default withAuthenticator(App);
