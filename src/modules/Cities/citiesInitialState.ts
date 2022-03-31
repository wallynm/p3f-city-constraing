
import { CityInterface, CitySize, Region } from '../../Interfaces'

export interface CityState {
  [key: string]: CityInterface
}


// <Node id="vessel" size={60}  x={-500} y={0}  label="Vessel"/>,
// <Node id="assel" size={90}  x={300} y={-500} label="Assel" decorator={Decorator}/>,
// <Node id="shersh" size={60} x={300} y={500}  label="Shersh"/>


export const citiesInitial: CityState = {
  'vessel': {
    id: 'vessel',
    x: -500,
    y: 0,
    name: 'Grand city of Vessel',
    region: Region['tanor'],
    size: CitySize['small'],
    regent: 'string',
    orientation: 'string',
    happiness: 1,
    taxes: 1,
    security: 1,
    roadConnections: ['shersh']
  },
  'tenesse': {
    id: 'tenesse',
    x: -600,
    y: 200,
    name: 'Tenesse',
    region: Region['tanor'],
    size: CitySize['small'],
    regent: 'string',
    orientation: 'string',
    happiness: 1,
    taxes: 1,
    security: 1,
    roadConnections: ['vessel', 'shersh']
  },
  'assel': {
    id: 'assel',
    x: 300,
    y: 300,
    name: 'Assel',
    region: Region['deimos'],
    size: CitySize['small'],
    regent: 'string',
    orientation: 'string',
    happiness: 1,
    taxes: 1,
    security: 1,
    roadConnections: ['vessel', 'tenesse']
  },
  'shersh': {
    id: 'shersh',
    x: 300,
    y: -500,
    name: 'Shersh',
    region: Region['smaar'],
    size: CitySize['small'],
    regent: 'string',
    orientation: 'string',
    happiness: 1,
    taxes: 1,
    security: 1,
    roadConnections: ['assel']
  }
}
