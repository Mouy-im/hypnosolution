import React, { useState } from 'react';
import Lang from './Lang';
import RightNav from './RightNav';

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={"burger " + (open ? 'openMenu' : 'closeMenu')} open={open} onClick={() => setOpen(!open)} >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <RightNav open={open} />
            <Lang />
        </>
    );
};

export default Burger;