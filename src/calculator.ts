
import { MortgageAmortization } from './methods/mortgage';
import { calculatorConfig, AmortizationMethod } from './interfaces';

export abstract class Calculator{

    /**
     * Calculates an amortization schedule.
     * @param {calculatorConfig} config 
     */
    static amortization(config:calculatorConfig){

        let method = undefined;

        switch (config.method) {
            case 'mortgage':
            default:
                method = MortgageAmortization;
                break;
        }

        //Turn APR into periodic interest
        let periodicInterest = (config.apr/100)/12;

        //Return the amortization
        return new method(config.balance, periodicInterest, config.loanTerm, config.startDate);

    }


    /**
     * Returns the amortization methods that are available.
     * @return {string[]} List of amortization methods.
     */
    static availableMehods():string[]{

        return [
            'mortgage'
        ]

    }


}


console.log(Calculator.availableMehods());

console.log(Calculator.amortization(
    {
        method:   'mortgage', 
        apr:      3.5, 
        balance:  280350, 
        loanTerm: 60,
        startDate: new Date()
    })
);