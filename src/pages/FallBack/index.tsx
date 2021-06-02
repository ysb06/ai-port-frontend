import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface FallbackArgs {
    from: any,
    to: any,
    status: any
}

export function RedirectWithStatus(args: FallbackArgs) {
    return (
        <Route
            render={({ staticContext }) => {
                // there is no `staticContext` on the client, so
                // we need to guard against that here
                console.log(staticContext)
                if (staticContext) staticContext.statusCode = args.status;
                return <Redirect from={args.from} to={args.to} />;
            }}
        />
    );
}

const Fallback: React.FC = () => {
    return (
        <div id="fallback">
            Error!!!
        </div>
    )
}

export default Fallback;