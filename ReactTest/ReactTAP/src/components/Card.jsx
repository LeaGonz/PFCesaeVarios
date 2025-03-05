// Using props to pass data to a component
function Card({ firstName, lastName, title }) {
    return (
        <div className="card">
            <h2>
                {firstName}
                {lastName}
            </h2>
            <h3>{title}</h3>
        </div>
    )
}

export default Card