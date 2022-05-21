import React from 'react';
import { Link } from 'react-router-dom';

const TallyPayIndex = () => {
    return (
        <div>
            <p>TallyPayIndex this will be the landing page for TallyPay</p>
            <ul>
                <li>
                    <Link to='tally-wills'>Tally Wills</Link>
                </li>
                <li>
                    <Link to='living-trust'>Living Trust</Link>
                </li>
                <li>
                    <Link to='temp-lock'>Temp Lock</Link>
                </li>
            </ul>
        </div>
    );
};

export default TallyPayIndex;
