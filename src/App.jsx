import React, { useRef, useEffect, useState } from "react";
import { Provider } from 'react-redux'
import { store } from './store'

import GlobalUI from "./modules/World/components/GlobalUI";
import WorldRepresentation from './modules/World/components/WorldRepresentation'
import LifeCycle from './modules/World/components/LifeCycle'

export default function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <div
          style={{
            height: "100vh",
            width: "100vw"
          }}
        >
          <LifeCycle/>
          <WorldRepresentation/>
          <GlobalUI/>
        </div>
      </div>
    </Provider>
  );
}
