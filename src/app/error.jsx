'use client';

import React from "react";

export default function error({ error, reset }) {
    React.useEffect(() => console.log(error), [error]);

    return (
        <div className="text-center mt-10">
            <h1>Something went wrong.</h1>
            <button className="hover:text-amber-500" onClick={() => reset()}>Try Again</button>
        </div>
    )
}