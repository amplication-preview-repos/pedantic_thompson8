import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProcessedContentList } from "./processedContent/ProcessedContentList";
import { ProcessedContentCreate } from "./processedContent/ProcessedContentCreate";
import { ProcessedContentEdit } from "./processedContent/ProcessedContentEdit";
import { ProcessedContentShow } from "./processedContent/ProcessedContentShow";
import { ProcessLogList } from "./processLog/ProcessLogList";
import { ProcessLogCreate } from "./processLog/ProcessLogCreate";
import { ProcessLogEdit } from "./processLog/ProcessLogEdit";
import { ProcessLogShow } from "./processLog/ProcessLogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"ContentProcessor"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ProcessedContent"
          list={ProcessedContentList}
          edit={ProcessedContentEdit}
          create={ProcessedContentCreate}
          show={ProcessedContentShow}
        />
        <Resource
          name="ProcessLog"
          list={ProcessLogList}
          edit={ProcessLogEdit}
          create={ProcessLogCreate}
          show={ProcessLogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
