import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Network, Node, Edge } from "react-vis-network";
import { RootState } from "../../../store";

import { citiesSelector } from '../../Cities/citiesSlice'

const Decorator = props => {
  return (
    <button
      onClick={() => console.log(props)}
    >
      Click Me
    </button>
  );
};

const Net = ({children}) => {


  const networkComponent = useRef();
  // const mode = "RouteSim"

  // const [mode, setMode] = useState("RouteSim");
  const [selectedLocations, setSelectedLocations] = useState(["지구"]);
  const myRoutes = ["지구-화성 게이트", "지구-목성 게이트"];
  const networkOption = {
    physics: false,
    nodes: {
      shape: "dot"
    },
    edges: {
      smooth: {
        enabled: false
      }
    },
    interaction: {
      dragNodes: true,
      dragView: true,
      hideEdgesOnDrag: false,
      // hideEdgesOnZoom: false,
      hideNodesOnDrag: false,
      hover: true,                   
      hoverConnectedEdges: true,
      multiselect: true,
      navigationButtons: true,
      selectable: true,
      selectConnectedEdges: true,
      tooltipDelay: 300,
      zoomView: true
    }
  };

  return (
    <Network
      options={networkOption}
      // scale={1}
      // position={{ x: 0, y: 0 }}
      ref={networkComponent}
    >
      {children}
    </Network>
  )
}

const WorldRepresentation = () => {
  const cities = useSelector(citiesSelector.selectAll)
  console.info('what')
  const [testName, setTestName] = useState("test")
  setTimeout(() => {
    console.info('wttt')
    setTestName("What?")
  }, 1000)

  // const check = (location, destination) => {
  //   switch (location) {
  //     case "지구":
  //       switch (destination) {
  //         case "달 게이트":
  //           return true;
  //         case "화성 게이트":
  //           return true;
  //         case "목성 게이트":
  //           return true;
  //         default:
  //           return false;
  //       }
  //     default:
  //       return false;
  //   }
  // };
  // useEffect(() => {
  //   const location = selectedLocations[selectedLocations.length - 1];
  //   networkComponent.current.network.on("click", event => {
  //     event.event.preventDefault();
  //     if (mode === "Takeoff") {
  //       console.log("clicked", event);
  //       const destination = event.nodes[0];
  //       if (event.nodes.length === 1 && check(location, destination)) {
  //         setSelectedLocations(selectedLocations.concat(event.nodes[0]));
  //       } else {
  //         setSelectedLocations(["지구"]);
  //         console.log("no!!");
  //       }
  //     }
  //     if (mode === "RouteSim") {
  //       console.log("clicked", event);
  //       if (event.edges.length === 1 && !myRoutes.includes(event.edges[0])) {
  //         console.log("항로 개척 실시");
  //       } else {
  //         console.log("no!!");
  //       }
  //     }
  //   });
  //   // networkComponent.current.network.on('selectNode', (opts) => {

  //   // })
  //   networkComponent.current.network.selectNodes(selectedLocations);
  // }, [networkComponent, selectedLocations, mode, myRoutes]);

  const renderConnectionNodes = () => {
      const connectionNodes = new Set();
      const renderNodes = []
  
      for(var i in cities) {
        const city = cities[i]
        const cityRoads = city.roadConnections
  
        for(var r in cityRoads) {
          const connect = cityRoads[r];
          connectionNodes.add(`${city.id}:${connect}`);
        }
      }

      console.info('connectionNodes', connectionNodes)
  
      connectionNodes.forEach((value) => {
        renderNodes.push(
          <Edge
            id={value}
            key={value}
            from={value.split(":")[0]}
            to={value.split(":")[1]}
          />
        )
      });
  
      return renderNodes
    }

  const renderCityNodes = () => {
    const renderNodes = [];

    for(var i in cities) {
      const city = cities[i]

      renderNodes.push(
        <Node
          id={city.id}
          key={city.id}
          size={city.size.size * 10}
          x={city.x}
          y={city.y}
          label={city.name}
        />
      )
    }

    return renderNodes
  }

  return (
    <Net>
      <Node
        id={'test'}
        key={'test'}
        size={5 * 10}
        x={0}
        y={0}
        label={'testssasdad'}
      />
      {renderCityNodes()}
      {renderConnectionNodes()}
    </Net>
  )
}

export default WorldRepresentation;
