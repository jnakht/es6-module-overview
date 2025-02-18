import React from 'react';
import Watch from '../Watch/Watch';
import hudai, { add, devideTheFirstNumBySecond as divide, multiply, subtract } from '../../Utils/Utils';
import * as allRounder from '../../Utils/ImportAll';


const Sunglass = () => {
    const num1 = 10, num2 = 20;
    const jog = add(num1, num2);
    const gun = multiply(num1, num2);
    const vaag = divide(num1, num2);
    const biyog = subtract (num1, num2);
    hudai();
    allRounder.greeting();
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;