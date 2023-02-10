import CookieStandAdmin from "./CookieStandAdmin"

export default function Head() {

    const user = null
    return (
        <Head>
            <title>Cookie Stand Admin</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {user ?
            <CookieStandAdmin/>
            :
            <LoginForm onLogin={login} />
        }
    );

    function LoginForm({onLogin}) {
        async function handleSubmit(event) {
            event.preventDefault();
            onLogin(event.target.username.value, event.target.password.value);
        }

        return (
            <form onsubmit={handleSubmit}>
                <fieldset autoComplete='off'>
                    <legend>Log In</legend>
                    <label htmlFor="username">Username</label>
                    <input name="username"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"/>
                    <button>Log In</button>
                </fieldset>
            </form>
        );
    }
}