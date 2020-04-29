import React from 'react';

const InputText =({...props}) => (
    <label>
        {props.label && <div>{props.label}</div>}
        <input
            type="text"
            {...props}
        />
    </label>
);

export default InputText;