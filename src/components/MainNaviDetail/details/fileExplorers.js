import React  from 'react';

import './css/fileExplorers.css'

let FileExplorers = (props) => {

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

  return (
    <div>
      <div id="file-explorer">
        <div className="dragbar_xVXFF"></div>

        <section className="panel_1hUeL0">

          <header className="swapitHeader_1hUeL0">
            <h6 className="swapitTitle_1hUeL0">File explorers</h6>
          </header>

          <div className="pluginsContainer_1hUeL0">
            <div id="plugins" className="plugins_3g7Fx2">
              <div className="container_uapQG" style={{ height: "100%", width: "100%", border: "0px" }}>

                <div className="fileexplorer_uapQG">
                  <div className="fileExplorerTree_uapQG">
                    <div className="treeview_uapQG">
                      <div>
                        <ul className="ul_tv_34gCHm fileexplorer">
                          <li className="li_tv_34gCHm">

                            <div className="label_tv_34gCHm top">
                              <div className="fas fa-caret-down" style={{ display: "inline-block" }}></div>

                              <span style={{ display: "inline-block" }}>
                                <div className="items_2ArcOJ">
                                  <span title="browser" data-path="browser" className="label">browser</span>
                                  <span className="menu-items">
                                    <span title="Create New File in the Browser Storage Explorer" className="newFile fas fa-plus-circle newFile_2ArcOJ head-item"></span>
                                    <span title="Publish all [browser] explorer files to a github gist" className="newFile fab fa-github newFile_2ArcOJ head-item"></span>
                                    <span title="Copy all files to another instance of Remix IDE" className="newFile far fa-copy newFile_2ArcOJ head-item"></span>
                                    <label title="Add Local file to the Browser Storage Explorer" className="far fa-folder-open newFile_2ArcOJ head-item">
                                    </label>
                                  </span>
                                </div>
                              </span>
                            </div>

                            <ul className="files">
                              {props.files.map((file, idx) => (
                                <li key={file + idx} className="li_tv_34gCHm file">
                                  <div className="label_tv_34gCHm">
                                    <span>
                                      <div className="items_2Arc03" onClick={onFileClick} data-file={file}>
                                        <span title={file} data-path={file} className="file-leaf" >{file}</span>
                                      </div>
                                    </span>
                                  </div>
                                </li>
                              ))
                              }
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default FileExplorers;
