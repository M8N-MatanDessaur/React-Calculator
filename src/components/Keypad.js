import { Button } from "./Button"

export const Keypad = (props) => {

    return(
        <div className="keypad-buttons-grid">
            <Button label={"7"} handleClick={props.handleClick}/>
            <Button label={"8"} handleClick={props.handleClick}/>
            <Button label={"9"} handleClick={props.handleClick}/>
            <Button label={"/"} handleClick={props.handleClick}/>
            <Button label={"4"} handleClick={props.handleClick}/>
            <Button label={"5"} handleClick={props.handleClick}/>
            <Button label={"6"} handleClick={props.handleClick}/>
            <Button label={"*"} handleClick={props.handleClick}/>
            <Button label={"1"} handleClick={props.handleClick}/>
            <Button label={"2"} handleClick={props.handleClick}/>
            <Button label={"3"} handleClick={props.handleClick}/>
            <Button label={"-"} handleClick={props.handleClick}/>
            <Button label={"."} handleClick={props.handleClick}/>
            <Button label={"0"} handleClick={props.handleClick}/>
            <Button label={"="} handleClick={props.handleClick}/>
            <Button label={"+"} handleClick={props.handleClick}/>
            <div></div>
            <div></div>
            <div></div>
            <Button className="fullbtn" label={"C"} handleClick={props.handleClick}/>
            
        </div>
    )
}