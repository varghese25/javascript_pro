

// React Code 
import React, { useState, useEffect } from 'react';

const [x, setX] = useState(1);
useEffect(() => {
    setX(x + 1);
    setX(prev => prev + 1);
},[]);
