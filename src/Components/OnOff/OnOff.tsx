import React, {useState} from 'react';

type PropsType = {
    // on: boolean
    // onChange: (on: boolean) => void
}


function OnOff(props: PropsType) {

    const [on, setOn] = useState(true)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        //backgroundColor: props.on ? 'greenYellow' : 'white'
        backgroundColor: on ? 'greenYellow' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '4px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
        //backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStile = {
        width: '10px',
        height: '10px',
        borderRadius: '8px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '2px',
        backgroundColor: on ? 'greenYellow' : 'red'
        // backgroundColor: props.on ? 'greenYellow' : 'red'
    }



    const onBtn = () => setOn(true)
    const offBtn = () => setOn(false)

    return (
        <div>
            <div style={onStyle} onClick={onBtn}>On</div>
            <div style={offStyle} onClick={offBtn}>Off</div>
            <div style={indicatorStile}></div>
        </div>
    )

}


export default OnOff