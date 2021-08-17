import React, {useEffect, useState} from "react";
import s from './Select.module.css'

export type SelectPropsType = {}

type SelectDataType = {
    id: number
    option: string
}

const dataForSelect: SelectDataType[] = [
    {id: 1, option: 'none'},
    {id: 2, option: 'Moscow'},
    {id: 3, option: 'Minsk'},
    {id: 4, option: 'Kiev'},
    {id: 5, option: 'Fish-burg'}
]

function MemoSelect(props: SelectPropsType) {

    const [currentOption, setCurrentOption] = useState('none')
    const [choseMode, setChoseMode] = useState(true)

    useEffect( ()=> {
        const chosenOption = localStorage.getItem('initialOption')
        if (chosenOption) {
            const newChose = JSON.parse(chosenOption)
            setCurrentOption(newChose)
        }

    }, [] )

    useEffect(() => {
        localStorage.setItem('initialOption', JSON.stringify(currentOption))
    }, [currentOption])

    const mappedOptions = dataForSelect.map(opt => {

        const choseOptionHandler = () => {
            setCurrentOption(opt.option)
            setChoseMode(!choseMode)
        }

        return (
            <div key={opt.id}>
                <span onClick={choseOptionHandler}>
                    &#10004;
                    <b className={s.singleOption}>{opt.option}</b>
                </span>
            </div>
        )
    })

    const choseModeHandler = () => {
        setChoseMode(!choseMode)
    }

    return (
        <div className={s.SelectComponent}>
            <div className={s.selector}>
                <h3 className={s.header}>
                    <span className={s.MainSign}>&raquo;</span>
                    <span className={s.currentOption} onClick={choseModeHandler} >{currentOption}</span>
                    {/*<button onClick={choseModeHandler} className={s.choseBtn}>&lsaquo;</button>*/}
                </h3>

            </div>
            <div className={s.allOptions}>
                {
                    // choseMode ? <div className={s.optionsToChose}>{mappedOptions}</div> : <div/>
                    !choseMode && <div className={s.optionsToChose}>{mappedOptions}</div>
                }
            </div>
        </div>
    )
}

export const Select = React.memo(MemoSelect)







