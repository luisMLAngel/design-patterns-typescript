import { FatMassFormula } from './fat-mass-formula.interface';

export class DeurenbergStrategy implements FatMassFormula {
    constructor() {}

    calculate(): number {
        console.log('ejecuto la formula de DeurenbergStrategy');
        return 0;
    }
}
