import {Formula} from "./formula.class";
import {JacksonPollock3Strategy} from "./jackson-pollock-3-strategy.class";
import {DeurenbergStrategy} from "./deurenberg-strategy.class";

const formula = new Formula();

formula.setStrategy(new JacksonPollock3Strategy());
formula.executeStrategy();

formula.setStrategy(new DeurenbergStrategy());
formula.executeStrategy();
