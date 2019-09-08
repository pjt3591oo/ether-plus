import React, { useState, useEffect } from 'react';

import FileExploreres from './details/fileExplorers'
import Compile from './details/compile'
import Run from './details/run'
import Analysis from './details/analysis'
import UnitTest from './details/unittest'
import PluginManager from './details/pluginManager'
import Settings from './details/settings'
import Wallet from './details/wallet'

import './naviDetail.css';

import Dropzone from "react-dropzone";

let NaviDetail = (props) => {

  let [w] = useState("300px")
  let [tab, setTab] = useState("1")


  useEffect(() => {
    setTab(props.selectedNavi)
  }, [props.selectedNavi])

  const onDropFile = acceptedFiles => {
    let tempFiles = []
    let tempBasePath = ''
    acceptedFiles.forEach(file => {
      let pathSplit = file.path.split('/').slice(1)
      tempFiles.push(pathSplit[pathSplit.length - 1])
      pathSplit.pop()
      tempBasePath = `/${pathSplit.join('/')}/`
    })
    props.onFileExplorerOpen(tempFiles, tempBasePath)
  };

  return (
    <div id="side-panel" className="sidepanel_3xXxXL" style={{ "width": w }}>
      {tab === "1" &&
        <Dropzone className="dnd" onDrop={onDropFile} >
          {({ getRootProps, getInputProps, isDragActive }) => (
            
            <div {...getRootProps()}>
              <FileExploreres
                files={props.files}
                selects={props.selects}
                basePath={props.basePath}
                onFileExplorerSelect={props.onFileExplorerSelect}
                onFileFocus={props.onFileFocus}
                onCodeOpen={props.onCodeOpen}
              />
            </div>
          )}</Dropzone>
      }
      {tab === "2" && 
        <Compile 
          onUpdateVersion={props.onUpdateVersion}
          compilerVersion={props.compilerVersion}
        />
      }
      {tab === "3" && <Run />}
      {tab === "4" && <Analysis />}
      {tab === "5" && <UnitTest />}
      {tab === "6" && <PluginManager />}
      {tab === "7" && <Settings />}
      {tab === "8" && <Wallet />}
    </div>
  );
}

export default NaviDetail;
