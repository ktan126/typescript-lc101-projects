import { Payload } from "./Payload";

export default class Astronauts {
    massKg: number;
    name: string;
    constructor(massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    };
};