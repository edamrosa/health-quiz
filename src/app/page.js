"use client"

import { jsonFile } from './data'
import LandingPage from './components/landingPage/LandingPage';
import { Provider } from 'react-redux';
import store from './store/store';

/*
NEXT STEPS:
- Create pages folder and save pages in it;
*/
export default function Home() {
  const data = jsonFile;
  
  return (
      <main className="bg-white">
        <Provider store={store}>
          <LandingPage/>
        </Provider>
      </main>
  )
}
