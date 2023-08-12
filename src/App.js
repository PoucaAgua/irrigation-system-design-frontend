import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './components/Header';
import EToModalComponent from './components/EToModalComponent';
import Projects from './components/Projects';


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

      <br/>
      <Projects
        user={user}
      />

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
