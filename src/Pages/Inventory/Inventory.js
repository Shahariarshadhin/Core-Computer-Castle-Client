import React, { useEffect, useState } from 'react';

import Parts from '../Parts';




const Inventory = () => {


    const [parts, setParts] = useState([]);




    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);
    return (
        <div>



            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
                {
                    parts.map(part => <Parts

                        key={part._id}
                        part={part}




                    ></Parts>)
                }

            </div>

        </div>
    );
};

export default Inventory;