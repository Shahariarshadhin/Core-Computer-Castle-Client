import React, { useEffect, useState } from 'react';

// import Footer from '../Footer/Footer';

import Parts from '../Parts';

// import './Inventory.css';


const Inventory = () => {


    const [parts, setParts] = useState([]);




    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);
    return (
        <div>

            <h1>inventory</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
                {
                    parts.map(part => <Parts

                        key={part._id}
                        part={part}




                    ></Parts>)
                }

            </div>







            {/* <Footer></Footer> */}

        </div>
    );
};

export default Inventory;