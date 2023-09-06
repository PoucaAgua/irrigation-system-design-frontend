import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './components/Header';
import Projects from './components/Projects';
import PageView from './domain/enum/PageView.js'
import MainView from './components/MainView';



function App({ user, signOut }) {
  const [pageView, setPageView] = useState(PageView.LIST_OF_PROJECTS);
  
  return (
    <div className="App">
      <Header
        user={user}
        signOut={() => signOut()}
      />
      <br />

      <main className="App-body">
        <MainView></MainView>

        {/* {(pageView === PageView.LIST_OF_PROJECTS) && (
          <Projects
            user={user}
            setPageView={(_pageView) => setPageView(_pageView)}
          />
        )}

        {(pageView === PageView.CREATE_NEW_PROJECT) && (
          <div>CREATE_NEW_PROJECT</div>
        )} */}

      </main>

    </div>
  );
}

export default withAuthenticator(App);
