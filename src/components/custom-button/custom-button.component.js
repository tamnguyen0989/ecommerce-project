import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ children, otherButtonProps }) => {
    return (
        <input className='custom-button' {...otherButtonProps}>
            {children}
        </input>
    );
};

export default CustomButton;