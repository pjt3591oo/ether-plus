import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import Dropzone from "react-dropzone";

import MainLog from '../MainLog'
import './editor.css';

let Editor = (props) => {

  let [left] = useState("350px")
  let [width, setWidth] = useState(window.innerWidth - 350 + 'px')
  let [height, setHeight] = useState(window.innerHeight - 285 + 'px')

  let [code, setCode] = useState('')

  useEffect(() => {
    window.ipcRenderer.on('/readFileRes', (event, args) => {
      props.onCodeOpen(args.content)
    })
  }, [props.files])

  useEffect(() => {
    setCode(props.code)
  }, [props.code])

  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    cursorStyle: 'line',
    automaticLayout: false,
    colors: { 'editor.lineHighlightBackground': '#0000FF20' }
  }

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth - 350 + 'px')
    setHeight(window.innerHeight - 285)
  });

  const editorDidMount = (editor, monaco) => {
    editor.focus();
  }

  const onChange = (newValue, e) => {
  }

  const onDropFile = acceptedFiles => {
  };

  const onFileClick = e => {
    let prevFiles = [...props.selects]
    let f = e.currentTarget.dataset.file
    if (!prevFiles.includes(f)) {
      prevFiles.push(f)
      props.onFileExplorerSelect(prevFiles)
    }
    props.onFileFocus(f)
    
    window.ipcRenderer.send('/readFileReq', {
      selectedFile: f,
      basePath: props.basePath
    })
  }
  const onCloseClick = e => {
    let f = e.currentTarget.dataset.file
    let idx = props.selects.indexOf(f)
    
    if(idx != -1) {
      let front = props.selects.slice(0, idx)
      let back = props.selects.slice(idx+1, props.selects.length)
      props.onFileExplorerSelect(front.concat(back))
    }
  }

  return (
    <div id="editor-container" style={{ left: left, width: width }}>
      <div className="header">
        <div className="bar">
          <div className="tabs">
            {props.selects.map( (file, idx) => (
              <div className="tab active" key={file+idx} data-file={file} onClick={onFileClick}>
                <span className="title">{file}</span>
                <span className="close" onClick={onCloseClick} data-file={file}>
                  <i className="text-dark fas fa-times" ></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dropzone">
        <Dropzone onDrop={onDropFile}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div {...getRootProps()}>
              {/* <input {...getInputProps()} /> */}
              <div className="editor" style={{ height: height + 'px' }}>
                <MonacoEditor
                  width={width}
                  height={height}
                  language="javascript"
                  theme="vs-white"
                  value={code}
                  options={options}
                  onChange={onChange}
                  editorDidMount={editorDidMount}
                />
              </div>
            </div>
          )}
        </Dropzone>
      </div>

      <div>
        <MainLog></MainLog>
      </div>
    </div>
  );
}

export default Editor;
