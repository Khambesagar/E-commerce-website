// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// function Protecte_Route(props) {
//     const { Component } = props
//     const navigate = useNavigate(); //add hook

//     useEffect(() => {
//         let login = localStorage.getItem('login')
//         if (!login) {
//             navigate('/login')
//         }
//     })
//     return (
//         <>
//             <Component />
//         </>
//     )
// }

// export default Protecte_Route

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protecte_Route(props) {
    const { Component } = props;
    const navigate = useNavigate(); // Add hook to navigate to the login page

    useEffect(() => {
        // Check login status every time the component is rendered
        const login = localStorage.getItem('login');
        if (!login) {
            // If not logged in, navigate to the login page
            navigate('/login');
        }
    }, [navigate]); // Dependency on `navigate` ensures it runs correctly once per component render

    return <Component />; // Return the protected component
}

export default Protecte_Route;
