import * as React from 'react';


const SelectValue = (props) => {
    return (
        <select
            className="controls__select"
            onChange={props.onChange}
            name="Minutes">
            <option value="300">5 mins</option>
            <option value="600">10 mins</option>
            <option value="900">15 mins</option>
            <option value="1200">20 mins</option>
            <option value="1500">25 mins</option>
            <option value="1800">30 mins</option>
            <option value="2100">35 mins</option>
            <option value="2400">40 mins</option>
            <option value="2700">45 mins</option>
            <option value="3000">50 mins</option>
            <option value="3300">55 mins</option>
        </select>
    );
}

export default SelectValue;