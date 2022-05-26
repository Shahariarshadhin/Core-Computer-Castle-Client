import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://glacial-hamlet-48280.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);
    return [parts, setParts];
}

export default useParts;