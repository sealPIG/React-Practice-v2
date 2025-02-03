// hook ?

import { useState } from "react";

const useCustomer = () => {
    const [name, setName] = useState('Name2');
    const [value, setValue] = useState(0);

    return {
        name,
        setName,

        value,
        setValue
    };
};

export { useCustomer };