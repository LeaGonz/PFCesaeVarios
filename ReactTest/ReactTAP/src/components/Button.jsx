export default function TabButton({ children, onSelect }) {
    // function handleClick() {
    //     alert('Olá, mundo!')
    // }

    return (
        <button onClick={onSelect}>{children}</button>
    )
}