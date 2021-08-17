import React, {useState} from 'react';

type PropsType = {
    setOn: (on: true | false) => void
}


function MemoUncontrolledOnOff(props: PropsType) {
    console.log('UncontrolledOnOff')
    const [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
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
    }

    const onBtn = () => { props.setOn(true); setOn(true) }
    const offBtn = () => { props.setOn(false); setOn(false) }

    return (
        <div>
            <div style={onStyle} onClick={onBtn}>On</div>
            <div style={offStyle} onClick={offBtn}>Off</div>
            <div style={indicatorStile}></div>
        </div>
    )

}

export const UncontrolledOnOff = React.memo(MemoUncontrolledOnOff)