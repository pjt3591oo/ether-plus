import React, { useState, useEffect } from 'react';
import './navi.css';

let Navi = (props) => {

  let [ tab, setTab ] = useState('1')

  useEffect(() => {
    setTab(props.selectedNavi)
  }, [props.selectedNavi])

  const onNaviClick = e => {
    const naviNum = e.target.attributes['navi'].value
    props.onNaviChange(naviNum)
  }

  return (
    <div className="App">
      <div id="icon-panel" className="iconpanel_3xXxXL bg-light">
        <div className="icons">
          <div id="fileExplorerIcons">

            <div plugin="fileExplorers" title="File explorers" className="icon_2aGKki" onClick={onNaviClick}>
              <img
                navi="1"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNjk2IDM4NHE0MCAwIDY4IDI4dDI4IDY4djEyMTZxMCA0MC0yOCA2OHQtNjggMjhoLTk2MHEtNDAgMC02OC0yOHQtMjgtNjh2LTI4OGgtNTQ0cS00MCAwLTY4LTI4dC0yOC02OHYtNjcycTAtNDAgMjAtODh0NDgtNzZsNDA4LTQwOHEyOC0yOCA3Ni00OHQ4OC0yMGg0MTZxNDAgMCA2OCAyOHQyOCA2OHYzMjhxNjgtNDAgMTI4LTQwaDQxNnptLTU0NCAyMTNsLTI5OSAyOTloMjk5di0yOTl6bS02NDAtMzg0bC0yOTkgMjk5aDI5OXYtMjk5em0xOTYgNjQ3bDMxNi0zMTZ2LTQxNmgtMzg0djQxNnEwIDQwLTI4IDY4dC02OCAyOGgtNDE2djY0MGg1MTJ2LTI1NnEwLTQwIDIwLTg4dDQ4LTc2em05NTYgODA0di0xMTUyaC0zODR2NDE2cTAgNDAtMjggNjh0LTY4IDI4aC00MTZ2NjQwaDg5NnoiLz48L3N2Zz4="
                alt="fileExplorers"
                className="image"
                style={{ "filter": tab === "1" ? "invert(0)" : "invert(0.5)" }}
              ></img>
            </div>

            <div id="compileIcons">
              <div plugin="solidity" title="Solidity compiler" className="icon_2aGKki" onClick={onNaviClick}>
                <img
                  navi="2"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAASdAAAEnQF8NGuhAAAAB3RJTUUH4wQMDx84DVYryQAAAjBJREFUSMe1102ITmEUB/DfO4aZRuM7otQgqSlCFmIhSRaSJClWs9BY2RAba1tLZTGxmbJWImFsWBhhZONzpJSEaJhhPl6bM/V2ux/vnTtz6untPvc857z/8/E/z61pXnZjHeoFejcwUWSs1qTTFjzHOP7l2PqCAVxuxmAzcgbLsSQH8SQ+YxM6igzOa8LpMvSH4dYI43iK3nDs17AND6oiPt+Qs3qgTso4fjU8r0Z3Fcfd6E0505nYe52olyn0VAn1FaxM2W/HSETgN76l6HREet6URbwPe3LeLw5k73OK7UDZdmrBIJYWROse3hak8gluJ1+0ZhyYwlNsLyCMHjOUvFCfij+Q19vmwjFcy9D5gUdVHDdDmY8xP3HmULDUnCGGswmnL3Oc7sBxsygDUeVDaMvR68fDnKItPSROBNo+/M3QOYwtwWq9s4n6ajBWltyJqAziVQbjlZpO03IzZ8CfDpab7vmJGKP3q14E8mQR7qaAaMdJvKiS4zw5lxG5MVyoWlxZshFHI8RpazP2lgl1DRdjAmVxdR070VVAUIM4Uqa4PuFg6LSlrFVRQJ3hIG2NY1fZUH/Asxy0a+L3a07H9M20nYZjmE8mnK5omNWTWJgCYhTHZup4BAuwPjHDNyT0/iTuYbXo7XdVqvpWA/fWI7dpF4exhufvwWSVmGv66ro10HdlVPpokEkd+/FzNobEQKBY23AuuWpx4xzCxyKDrSXI4nrkPO+DrA2XmjH2H8KUd4MWwdIJAAAAAElFTkSuQmCC"
                  alt="solidity"
                  className="image"
                  style={{ "filter": tab === "2" ? "invert(0)" : "invert(0.5)" }
                  }></img>
              </div>
            </div>

            <div id="runIcons">
              <div plugin="run" title="Deploy & run transactions" className="icon_2aGKki" onClick={onNaviClick}>
                <img
                  navi="3"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzFfY29weSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4Ig0KCSB5PSIwcHgiIHdpZHRoPSI3NDIuNTQ1cHgiIGhlaWdodD0iNjc2Ljg4NnB4IiB2aWV3Qm94PSIwIC0wLjIwNCA3NDIuNTQ1IDY3Ni44ODYiDQoJIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAtMC4yMDQgNzQyLjU0NSA2NzYuODg2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwb2x5Z29uIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjI5NS45MTEsMC43MTEgNDg4LjkxMSwzMDQuMTg2IDQ4OC45MTEsMzk3LjE4MSAyOTMuOTExLDY3Ni41NTYgDQoJCTc0MS43ODYsMzQ5Ljk0MyAJIi8+DQoJPHBvbHlnb24gc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50cz0iNDE3LjA4Myw0MDYuNTg5IDIwOS43OTEsNTE5LjQ5NCAxLjg0Niw0MDYuMjM0IDIwOS43OTEsNjc1Ljg2MyAJIi8+DQoJPHBvbHlnb24gc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50cz0iNDE3LjA4MywzMTguNzA3IDIwOS43OTEsMC43MTEgMS44NDYsMzE4LjQyOCAyMDkuNzkxLDQzMS42ODkgCSIvPg0KPC9nPg0KPC9zdmc+DQo="
                  alt="run"
                  className="image"
                  style={{ "filter": tab === "3" ? "invert(0)" : "invert(0.5)" }}
                ></img>
              </div>
            </div>

            <div id="analysisIcons">
              <div plugin="solidityStaticAnalysis" title="Solidity static analysis" className="icon_2aGKki" onClick={onNaviClick}>
                <img
                  navi="4"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjA0OCIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMjA0OCAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMDQ4IDE1MzZ2MTI4aC0yMDQ4di0xNTM2aDEyOHYxNDA4aDE5MjB6bS0xMjgtMTI0OHY0MzVxMCAyMS0xOS41IDI5LjV0LTM1LjUtNy41bC0xMjEtMTIxLTYzMyA2MzNxLTEwIDEwLTIzIDEwdC0yMy0xMGwtMjMzLTIzMy00MTYgNDE2LTE5Mi0xOTIgNTg1LTU4NXExMC0xMCAyMy0xMHQyMyAxMGwyMzMgMjMzIDQ2NC00NjQtMTIxLTEyMXEtMTYtMTYtNy41LTM1LjV0MjkuNS0xOS41aDQzNXExNCAwIDIzIDl0OSAyM3oiLz48L3N2Zz4="
                  alt="solidityStaticAnalysis"
                  className="image"
                  style={{ "filter": tab === "4" ? "invert(0)" : "invert(0.5)" }}
                ></img>
              </div>
            </div>

            <div id="otherIcons">
              <div plugin="solidityUnitTesting" title="Solidity unit testing" className="icon_2aGKki" onClick={onNaviClick}>
                <img
                  navi="5"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wUDEhQZ0zbrmQAAAfNJREFUWMPF17lrFVEUx/EPaIKovfAScSndjUtULFQSYhHF0r/Dwsa/RywUiTaWgvaChWsiKkSMZte4o7G5A49x7r0zLy/PA6eZOef3PXebuYfu2xCmcQ9b9NgOYw6rwR9ia6/gR7HQBi/8PjavN/w4FivghV9bT/gwlhLwHzjTVPQ8rqAvE3ciA/+O8abwy/gVBG4lijiJ5czIL64FXvhNbCzFnaoBv9AUPo7fEcEb2BDiTuNTAv4NYxX6u/EIM7GZuZoQXcX1sJk+J2K+YrRCexfetsX9xKVyUB9uZ4r4k3j3BSMR+JvIMv2zQfsxkSkiBj9XAd8ZgRf+vmop+nGnAXwlcs534HUm93FsQ9YtIjby7XiVyZ3BntSpyBWxgrMR+FQG/gF76xzNftxtMO1rgo+G5AdBqLBN4d9eCCyHD1En8Oi0j4UPSBE4hcFSERN4Fz7BZRvEZKcjHynBC5/EQI1lGqgJ3xcTmE4kvswUMRBiUvCPKTg8zQi8QKsirxXe5eD7c1N4ALMZoeelIlrhWSpnNmjXsoM1iihmYhueZGIXcKTp7/hQ6UZb5c+Cp2LmglZHVqeIlC+G2/GarNMiFnGsWzfdpkV0Fd7e5czXgC+FvmDdWq35/wVvbzbnI/DhXvV9Q6W+r6fw9hZsKnjX4H8B0Aamri7CrBsAAAAASUVORK5CYII="
                  alt="solidityUnitTesting"
                  className="image"
                  style={{ "filter": tab === "5" ? "invert(0)" : "invert(0.5)" }}
                ></img>
              </div>
            </div>

            <div id="otherIcons">
              <div plugin="solidityUnitTesting" title="Solidity unit testing" className="icon_2aGKki" onClick={onNaviClick}>
                <img
                  navi="8"
                  src="data:image/png;base64,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"
                  alt="solidityUnitTesting"
                  className="image"
                  style={{ "filter": tab === "8" ? "invert(0)" : "invert(0.5)" }}
                ></img>
              </div>
            </div>

            <div id="settingsIcons">
              <div plugin="settings" title="Settings" className="icon_2aGKki setting" onClick={onNaviClick}>
                <img
                  navi="7"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMTUyIDg5NnEwLTEwNi03NS0xODF0LTE4MS03NS0xODEgNzUtNzUgMTgxIDc1IDE4MSAxODEgNzUgMTgxLTc1IDc1LTE4MXptNTEyLTEwOXYyMjJxMCAxMi04IDIzdC0yMCAxM2wtMTg1IDI4cS0xOSA1NC0zOSA5MSAzNSA1MCAxMDcgMTM4IDEwIDEyIDEwIDI1dC05IDIzcS0yNyAzNy05OSAxMDh0LTk0IDcxcS0xMiAwLTI2LTlsLTEzOC0xMDhxLTQ0IDIzLTkxIDM4LTE2IDEzNi0yOSAxODYtNyAyOC0zNiAyOGgtMjIycS0xNCAwLTI0LjUtOC41dC0xMS41LTIxLjVsLTI4LTE4NHEtNDktMTYtOTAtMzdsLTE0MSAxMDdxLTEwIDktMjUgOS0xNCAwLTI1LTExLTEyNi0xMTQtMTY1LTE2OC03LTEwLTctMjMgMC0xMiA4LTIzIDE1LTIxIDUxLTY2LjV0NTQtNzAuNXEtMjctNTAtNDEtOTlsLTE4My0yN3EtMTMtMi0yMS0xMi41dC04LTIzLjV2LTIyMnEwLTEyIDgtMjN0MTktMTNsMTg2LTI4cTE0LTQ2IDM5LTkyLTQwLTU3LTEwNy0xMzgtMTAtMTItMTAtMjQgMC0xMCA5LTIzIDI2LTM2IDk4LjUtMTA3LjV0OTQuNS03MS41cTEzIDAgMjYgMTBsMTM4IDEwN3E0NC0yMyA5MS0zOCAxNi0xMzYgMjktMTg2IDctMjggMzYtMjhoMjIycTE0IDAgMjQuNSA4LjV0MTEuNSAyMS41bDI4IDE4NHE0OSAxNiA5MCAzN2wxNDItMTA3cTktOSAyNC05IDEzIDAgMjUgMTAgMTI5IDExOSAxNjUgMTcwIDcgOCA3IDIyIDAgMTItOCAyMy0xNSAyMS01MSA2Ni41dC01NCA3MC41cTI2IDUwIDQxIDk4bDE4MyAyOHExMyAyIDIxIDEyLjV0OCAyMy41eiIvPjwvc3ZnPg=="
                  alt="settings"
                  className="image"
                  style={{ "filter": tab === "7" ? "invert(0)" : "invert(0.5)" }}
                ></img>
              </div>

              <div plugin="pluginManager" title="Plugin manager" className="icon_2aGKki" onClick={onNaviClick}>
                <img
                  navi="6"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNzU1IDQ1M3EzNyAzOCAzNyA5MC41dC0zNyA5MC41bC00MDEgNDAwIDE1MCAxNTAtMTYwIDE2MHEtMTYzIDE2My0zODkuNSAxODYuNXQtNDExLjUtMTAwLjVsLTM2MiAzNjJoLTE4MXYtMTgxbDM2Mi0zNjJxLTEyNC0xODUtMTAwLjUtNDExLjV0MTg2LjUtMzg5LjVsMTYwLTE2MCAxNTAgMTUwIDQwMC00MDFxMzgtMzcgOTEtMzd0OTAgMzcgMzcgOTAuNS0zNyA5MC41bC00MDAgNDAxIDIzNCAyMzQgNDAxLTQwMHEzOC0zNyA5MS0zN3Q5MCAzN3oiLz48L3N2Zz4="
                  alt="pluginManager"
                  className="image"
                  style={{ "filter": tab === "6" ? "invert(0)" : "invert(0.5)" }}
                ></img>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Navi;
