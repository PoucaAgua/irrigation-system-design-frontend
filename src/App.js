import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './components/Header';
import EToModalComponent from './components/EToModalComponent';
import Projects from './components/Projects';
import PageView from './domain/enum/PageView.js'



function App({ user, signOut }) {
  const [eto, setEto] = useState(0);
  const [showEtoComponent, setShowEtoComponent] = useState(false);
  const [pageView, setPageView] = useState(PageView.LIST_OF_PROJECTS);

  return (
    <div className="App">
      <Header
        setShowEtoComponent={(bool) => setShowEtoComponent(bool)}
        user={user}
        signOut={() => signOut()}
      />
      <br />

      {(pageView === PageView.LIST_OF_PROJECTS) && (
          <Projects
            user={user}
            setPageView={(_pageView)=> setPageView(_pageView)}
          />
      )}

      {(pageView === PageView.CREATE_NEW_PROJECT) && (
        <div>CREATE_NEW_PROJECT</div>
      )}

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
