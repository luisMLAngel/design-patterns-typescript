import { FatMassFormula } from './fat-mass-formula.interface';

export class JacksonPollock3Strategy implements FatMassFormula {

    constructor() {

    }

    calculate(): number {
        console.log('ejecuto la formula de JacksonPollock3Strategy');
        return 0;
    }
}
