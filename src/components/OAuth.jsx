import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firedase'; // Ensure this is the correct path to your Firebase setup
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice'; // Ensure this is the correct path to your userSlice
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            // Sign in with Google
            const result = await signInWithPopup(auth, provider);

            // Fetch user data from your backend
            const response = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // Dispatch the success action to Redux
            dispatch(signInSuccess(data));
            navigate('/');

        } catch (error) {
            console.error('Could not sign in with Google:', error);
        }
    };

    return (
        <button
            onClick={handleGoogleClick}
            type='button'
            className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
        >
            Continue with Google
        </button>
    );
}
