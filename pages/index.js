import CookieStandAdmin from '../components/CookieStandAdmin';
import { useAuth, AuthProvider } from '../contexts/auth';
import useResource from '../hooks/useResource';
import Head from '../components/Head';
import LoginForm from '../components/LoginForm';


export default function Home() {

  const { user, login } = useAuth();

  return (
    <>
      <Head/>
      {user ?
        <CookieStandAdmin />
        :
        <LoginForm onLogin={login} />
      }
      
    </>
  )
}

// 
