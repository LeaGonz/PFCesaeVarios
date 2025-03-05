
export default function Login({ user, children }) {
    function handleClick() {
        alert(user)
    }

    return (
        <button onClick={handleClick}>{children}</button>
    )
}