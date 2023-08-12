import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EToModalComponent from './components/EToModalComponent';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './components/Header';


function App({ user, signOut }) {
  const [eto, setEto] = useState(0);
  const [showEtoComponent, setShowEtoComponent] = useState(false);


  return (
    <div className="App">
      <Header
        setShowEtoComponent={(bool) => setShowEtoComponent(bool)}
        user={user}
        signOut={() => signOut()}
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
