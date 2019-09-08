import React, { useState, useEffect } from 'react';
import './css/compile.css'
import solcjs from 'solc-js';

let Compile = (props) => {

  let [compilerVersions, setCompilerVersions] = useState([])

  useEffect(() => {
    (async () => {
      const select =  await solcjs.versions()
      setCompilerVersions(select.releases)
    })()
  }, [])

  const onCompilerVersionClick = e => {
    let version = e.target.value
    props.onUpdateVersion(version)
  }

  const onCompileClick = e => {
    (async () => {
      // console.log(props.compilerVersion)
      const compiler = await solcjs(props.compilerVersion)
      const sourceCode = `
  library OldLibrary {
      function someFunction(uint8 a) public returns(bool);
  }
 
  contract NewContract {
      function f(uint8 a) public returns (bool) {
          return OldLibrary.someFunction(a);
      }
  }`
 
      const output = await compiler(sourceCode)
      console.log(output)
    })()
  }

  return (
    <div id="compile">
      <div className="dragbar_xVXFF"></div>

      <section className="panel_1hUeL0">
        <header className="swapitHeader_1hUeL0">
          <h6 className="swapitTitle_1hUeL0">SOLIDITY COMPILER</h6>
        </header>

        <div className="pluginsContainer_1hUeL0">

          <section>
            <article className="compiler">
              <header className="navbar navbar-light p-2 bg-light">
                <div className="row w-100 no-gutters mb-2">
                  <div className="label">
                    <label className="compilerLabel_4u2BOM input-group-text pl-0 border-0" >Compiler</label>
                  </div>
                  <div className="content">
                    <select id="versionSelector" className="custom-select" onChange={onCompilerVersionClick} >
                      {compilerVersions.map((version, idx) => (
                        <option value={version} key={version + '-' + idx} data-version={version} >{version}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row w-100 no-gutters mb-2">
                  <div className="label"><label className="compilerLabel_4u2BOM input-group-text pl-0 border-0">Language</label></div>
                  <div className="content">
                    <select id="compilierLanguageSelector" title="Available since v0.5.7" className="custom-select">
                      <option>Solidity</option>
                      <option>Yul</option>
                    </select>
                  </div>
                </div>
                <div className="row w-100 no-gutters">
                  <div className="label"><label className="compilerLabel_4u2BOM input-group-text pl-0 border-0">EVM Version</label></div>
                  <div className="content"><select id="evmVersionSelector" className="custom-select">
                    <option value="default">compiler default</option>
                    <option>petersburg</option>
                    <option>constantinople</option>
                    <option>byzantium</option>
                    <option>spuriousDragon</option>
                    <option>tangerineWhistle</option>
                    <option>homestead</option>
                  </select></div>
                </div>
              </header>

              <div className="compiler_btn">
                <button title="Compile" className="btn btn-primary btn-block disabled" onClick={onCompileClick}>
                  <span>
                    <i aria-hidden="true" className="fas fa-sync icon_4u2BOM" title=""></i>
                    Compile &lt;no file selected&gt;
                  </span>
                </button>
              </div>
            </article>

            <article>
              <small className="compiler-config">Compiler Configuration</small>
              <ul className="list-group list-group-flush">
                <li className="list-group-item form-group compilerConfig_4u2BOM">
                  <input id="autoCompile" type="checkbox" title="Auto compile" className="autocompile_4u2BOM" />
                  <label >Auto compile</label>
                </li>
                <li className="list-group-item form-group compilerConfig_4u2BOM">
                  <input id="optimize" type="checkbox" />
                  <label >Enable Optimization</label>
                </li>
                <li className="list-group-item form-group compilerConfig_4u2BOM">
                  <input id="hideWarningsBox" type="checkbox" title="Hide warnings" className="autocompile_4u2BOM" />
                  <label >Hide warnings</label>
                </li>
              </ul>
            </article>
          </section>

          <section className="contract-info">
            <article className="no-contract">
              <span role="alert" className="alert alert-warning">No Contract Compiled Yet</span>
            </article>

            <article className="head bg-light navbar mb-3 input-group">
              <label className="border-0 input-group-text" >Contract</label>
              <select id="compiledContracts" className="custom-select">
                <option value="mung">mung (4.6.sol)</option>
              </select>
            </article>

            <article className="info">
              <button className="publish-on-swarm set-btn"> 
                <i aria-hidden="true" className="copyIcon_4u2BOM fas fa-upload"></i>
                <span>Publish on Swarm</span>
              </button>
              
              <button className="compilation-details set-btn">Compilation Details </button>
              
              <div className="contract-helper-btn">
                <div className="input-group">
                  <div role="group" aria-label="Copy to Clipboard" className="btn-group">
                    <button title="Copy ABI to clipboard" className="get-btn">
                      <i aria-hidden="true" className="copyIcon_4u2BOM far fa-clipboard"></i>
                      <span> ABI</span>
                    </button>
                    
                    <button title="Copy Bytecode to clipboard" className="get-btn">
                      <i aria-hidden="true" className="copyIcon_4u2BOM far fa-clipboard"></i>
                      <span> Bytecode</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <div className="error-blocks">
            
            <div className="sol error alert alert-danger">
              <pre>
                <span>browser/4.8.sol:11:3: ParserError: Expected ';' but got '}'

                </span>
              </pre>
              <div className="close">
                <i className="fas fa-times"></i>
              </div>
            </div>

            <div className="sol warning alert alert-warning">
              <pre>
                <span>browser/4.8.sol:3:1: Warning: Source file does not specify required compiler version! Consider adding "pragma solidity ^0.5.1;"

                </span>
              </pre>
              <div className="close">
                <i className="fas fa-times"></i>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Compile;
