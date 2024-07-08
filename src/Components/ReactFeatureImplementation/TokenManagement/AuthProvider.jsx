import { useEffect } from 'react';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const verifyToken = async () => {
            if (authToken) {
                try {
                    await axios.get('/api/verify-token', { headers: { Authorization: `Bearer ${authToken}` } });
                } catch (error) {
                    setAuthToken(null);
                    localStorage.removeItem('token');
                }
            }
        };

        verifyToken();
    }, [authToken]);

    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
