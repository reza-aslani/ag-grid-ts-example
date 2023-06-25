//--- https://codesandbox.io/s/ag-grid-examples-with-typescript-3v0zt?file=/package.json:294-361

import React, { useCallback, useMemo, useRef, useState } from 'react';
//import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './App.css';
import GridStatusBar from './GridStatusBar';

const App = () => {
  return <GridStatusBar />
};

export default App;