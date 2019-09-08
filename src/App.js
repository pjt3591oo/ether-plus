import React from "react";

import Navi from './containers/MainNavi'
import Editor from './containers/MainEditor'
import NaviDetail from './containers/MainNaviDetail'

function App() {
 
  return (
    <div>
      <Navi></Navi>
      <NaviDetail></NaviDetail>
      <div>
        <Editor></Editor>
      </div>
    </div>
  );
}


export default App;
