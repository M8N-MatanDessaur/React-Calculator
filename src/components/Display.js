export const Display = (props) => {
    return(
        <>
            <input type="text" id="display" value={props.output} readOnly/>
        </>
    )
}