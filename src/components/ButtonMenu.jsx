import React, { useRef } from 'react';

export default function ScrollTo() {
    const ref = useRef(null);

    const handleCliick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth'});
    };

    return (
        <li
            className="cursor-pointer"
            onClick={handleCliick}
            ref={ref}
        >
            Portafolio
        </li>
    );
}