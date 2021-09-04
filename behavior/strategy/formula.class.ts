import {FatMassFormula} from "./fat-mass-formula.interface";

export class Formula {
    private fatMassFormula!: FatMassFormula;
    setStrategy(formulaStrategy: FatMassFormula) {
        this.fatMassFormula = formulaStrategy;
    }
    executeStrategy(): number {
        this.fatMassFormula.calculate();
        return 0;
    }
}
