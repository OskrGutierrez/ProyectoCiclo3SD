import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export const PrivateRoute = ({children}) => {
    
        const { user, isAuthenticated, isLoading } = useAuth0();
        
        if (isLoading) return <div>Loading...</div>

        return isAuthenticated ? <>{children}</>: <div>No estas autorizado para ver este sitio.</div>
}

export default PrivateRoute;