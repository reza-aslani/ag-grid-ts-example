import React from "react";
import { AgGridReact, AgGridReactProps } from "@ag-grid-community/react";
//import { AllModules, GridOptions } from "@ag-grid-enterprise/all-modules";

// Will use `dart-sass` once CodeSandbox supports it.
// See https://github.com/codesandbox/codesandbox-client/issues/4742
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Grid: React.FC<AgGridReactProps> = (props) => {
  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "100%",
        width: "100%",
        marginTop: "5px"
      }}
    >
      <AgGridReact {...props} />
    </div>
  );
};

export default Grid;