import React from 'react';
import './log.css';

function Log() {
  // let [left, setLeft] = useState("350px")
  // let [width, setWidth] = useState(window.innerWidth - 350 + 'px')

  window.addEventListener("resize", () => {
    // setWidth(window.innerWidth - 350 + 'px')
  });

  return (
    <div id="Log">
      <div className="header">
        <div className="menu menu_2VOEmr border-top border-dark bg-light">
          <div className="tab">
            <i className="btn btn-secondary btn-sm align-items-center toggleTerminal fas fa-angle-double-down"></i>
          </div>

          <div className="tab clear_2VOEmr">
            <i aria-hidden="true" title="Clear console" className="fas fa-ban"></i>
          </div>
          <div title="Pending Transactions" className="tab pendingTx_2VOEmr">0</div>
          <div className="tab verticalLine_2VOEmr"></div>
          <div className="tab form-check">
            <input id="listenNetworkCheck" type="checkbox" title="If checked Remix will listen on all transactions mined in the current environment and not only transactions created by you" className="form-check-input " />
            <label title="If checked Remix will listen on all transactions mined in the current environment and not only transactions created by you" className="listenOnNetworkLabel_2VOEmr form-check-label"> listen on network </label>
          </div>
          <div className="tab search"><i aria-hidden="true" className="fas fa-search searchIcon_2VOEmr bg-light"></i>
            <input type="text" id="searchInput" placeholder="Search with transaction hash or address" className="filter form-control" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="block">
            <div>
              <div>remix.call(message: name, key, payload): Call a registered plugins</div>
              <br />
              <div>remix.getFile(path): Returns the content of the file located at the given path</div>
              <br />
              <div>remix.setFile(path, content): set the content of the file located at the given path</div>
              <br />
              <div>remix.debug(hash): Start debugging a transaction.</div>
              <br />
              <div>remix.loadgist(id): Load a gist in the file explorer.</div>
              <br />
              <div>remix.loadurl(url): Load the given url in the file explorer. The url can be of type github, swarm, ipfs or raw http</div>
              <br />
              <div>remix.setproviderurl(url): Change the current provider to Web3 provider and set the url endpoint.</div>
              <br />
              <div>remix.execute(filepath): Run the script specified by file path. If filepath is empty, script currently displayed in the editor is executed.</div>
              <br />
              <div>remix.exeCurrent(): Run the script currently displayed in the editor</div>
              <br />
              <div>remix.help(): Display this help message</div>
              <br />
              <div>remix.debugHelp(): Display help message for debugging</div>
              <br />
            </div>
          </div>
          <div className="block_2VOEmr">
            <div>
              <div> - Welcome to Remix v0.8.5 - </div>
              <br />
              <div>You can use this terminal for: </div>
              <ul className="ul_stNQn">
                <li>Checking transactions details and start debugging.</li>
                <li>Running JavaScript scripts. The following libraries are accessible:
                <ul className="ul_stNQn">
                    <li><a href="https://web3js.readthedocs.io/en/1.0/">web3 version 1.0.0</a></li>
                    <li><a href="https://docs.ethers.io/ethers.js/html/">ethers.js</a></li>
                    <li><a href="https://www.npmjs.com/package/swarmgw">swarmgw</a></li>
                    <li>remix (run remix.help() for more info)</li>
                  </ul>
                </li>
                <li>Executing common command to interact with the Remix interface (see list of commands above). Note that these commands can also be included and run from a JavaScript script.</li>
                <li>Use exports/.register(key, obj)/.remove(key)/.clear() to register and reuse object across script executions.</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="cli">
          <span className="prompt">></span>
          <span className="input">
            <input type="text"></input>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Log;
