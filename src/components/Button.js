export const Button = (props) => {
    return(
        <button onClick={props.handleClick} value={props.label}>{props.label}</button>
    )
}