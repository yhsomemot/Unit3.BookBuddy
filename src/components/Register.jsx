/* TODO - add your code to create a functional React component that renders a registration form */

export function Register() {

    function handleSubmit(evt) {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const newPlayer = Object.fromEntries(formData.entries());
      }

    return (
        <>
        <h1>
            Register
        </h1>

        <form onSubmit={handleSubmit}>
            {/* have a error mesasge where it needs to be an email */}
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" />

            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" />

            <label htmlFor="username">Username</label>
            <input type="text" name="username" />

            <label htmlFor="password">Password</label>
            <input type="text" name="password" />
            
            <button type="submit">Register</button>
        </form>
        </>
    )
}