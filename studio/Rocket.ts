import Astronauts from './Astronaut';
import Cargo from './Cargo';
import { Payload } from './Payload';

export default class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronauts[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    };
    sumMass( items: Payload[] ): number {
        return Number;
    }
    currentMassKg(): number
};