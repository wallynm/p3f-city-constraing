type resourceType = 'wood' | 'ore' | 'gold' | 'steel' | 'fish' | 'fertil-ground';

export interface RegionInterface {
  id: string,
  name: string,
  naturalResources: resourceType[]
  cities: string[]
}

const regionSmaar:RegionInterface = {
  id: 'smaar',
  name: 'Smaar',
  naturalResources: ['ore', 'fish'],
  cities: ['tenesse', 'shersh', 'medine', 'farlan', 'fenri']
}

const regionTanor:RegionInterface = {
  id: 'tanor',
  name: 'Tanor',
  naturalResources: ['ore', 'fish'],
  cities: ['vessel', 'lendrenia']
}

const regionDeimos:RegionInterface = {
  id: 'deimos',
  name: 'Deimos',
  naturalResources: ['ore', 'fish'],
  cities: ['vessel', 'lendrenia']
}


export const Region = {
  smaar: regionSmaar,
  tanor: regionTanor,
  deimos: regionDeimos
}



export interface BuildingInterface {
  type: 'defense' | 'entertainment' | 'producion',
  capacity: number,
  resources: resourceType[]
} 


export interface CityInterface {
  x?: number,
  y?: number,
  id: string,
  name: string,
  region: RegionInterface,
  size: CitySizeInterface,
  regent: string,
  orientation: string,
  happiness: number,
  taxes: number,
  security: number,
  roadConnections: string[],
  resourcesNeed?: [],
  structures?: [],
  conflicts?: []
}


export interface CitySizeInterface  {
  size: number,
  population: number,
  consctruction: {
    'multiplierSpeed': number,
    'delay': number,
    'slots': number
  },
  region: string,
  growthRate: number,
  growthSpeed: number,
  maxBuildings: number,
}

const verySmallCity:CitySizeInterface = {
  size: 1,
  population: 100,
  consctruction: {
    'multiplierSpeed': 1,
    'delay': 20,
    'slots': 1
  },
  region: 'string',
  growthRate: 5,
  growthSpeed: 30,
  maxBuildings: 30
}

const smallCity:CitySizeInterface = {
  size: 2,
  population: 500,
  consctruction: {
    'multiplierSpeed': 1,
    'delay': 10,
    'slots': 1
  },
  region: 'string',
  growthRate: 5,
  growthSpeed: 15,
  maxBuildings: 30
}

const mediumCity:CitySizeInterface = {
  size: 3,
  population: 5000,
  consctruction: {
    'multiplierSpeed': 1,
    'delay': 10,
    'slots': 1
  },
  region: 'string',
  growthRate: 5,
  growthSpeed: 15,
  maxBuildings: 30
}

const largeCity:CitySizeInterface = {
  size: 4,
  population: 50000,
  consctruction: {
    'multiplierSpeed': 1,
    'delay': 10,
    'slots': 1
  },
  region: 'string',
  growthRate: 5,
  growthSpeed: 15,
  maxBuildings: 30
}

const extraLargeCity:CitySizeInterface = {
  size: 2,
  population: 3000000,
  consctruction: {
    'multiplierSpeed': 1,
    'delay': 10,
    'slots': 1
  },
  region: 'string',
  growthRate: 5,
  growthSpeed: 15,
  maxBuildings: 30
}

export const CitySize = {
  verySmall: verySmallCity,
  small: smallCity,
  medium: mediumCity,
  large: largeCity,
  extraLarge: extraLargeCity
}

