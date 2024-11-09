import React from 'react';

import './Partners.css';
import udl from './UDL_logo.png';

const Partners = () => {
    return (
        <>
            <div className="main-partners">
                <h1>Our Partners</h1>
                <a href="https://www.linkedin.com/company/upsidedownlabs/" target="_blank" rel="noopener noreferrer">
                    <img src={udl} alt="UDlabs" className="udl-logo" />
                </a>
            </div>
        </>
    );
}

export default Partners;
