import reactLogo from '../assets/react.svg'

// array of strings
const moduleDescription = ['Aprendendo React', 'Desenvolvendo aplicações web', 'Aprendendo Tailwind']
// function to generate random integer
function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1))
}
// get random string from array
const content = moduleDescription[genRandomInt(2)]

function Header() {
    return (
        <header>
            <img src={reactLogo} alt="" />
            <h4>{content}</h4>
        </header>
    )
}

// export Header component to be used in App component
export default Header