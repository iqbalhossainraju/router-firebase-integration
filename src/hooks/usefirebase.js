import { useState } from 'react';

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        console.log('signed')
    }
    return {
        user,
        signInWithGoogle
    };
};

export default useFirebase;