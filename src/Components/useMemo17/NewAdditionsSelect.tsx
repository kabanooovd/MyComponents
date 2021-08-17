import React, {useEffect, useMemo, useState} from "react";
import s from './Select.module.css'

export type SelectPropsType = {}

type SelectDataType = {
    id: string
    option: string
}
type CityType = {
    id: string
    cityTitle: string
    population: number
}

const dataForSelect: SelectDataType[] = [
    {id: 'none', option: 'none'},
    {id: 'RF', option: 'Russia'},
    {id: 'RB', option: 'Belarus'},
    {id: 'UA', option: 'Ukraine'},
]

const cities: CityType[] = [
    {id: 'RF', cityTitle: 'Moscow', population: 15000000},
    {id: 'RF', cityTitle: 'Saint-Peters-Burg', population: 5000000},
    {id: 'RF', cityTitle: 'Fish-Burg', population: 500000},
    {id: 'RB', cityTitle: 'Minsk', population: 15000000},
    {id: 'RB', cityTitle: 'Brest', population: 5000000},
    {id: 'RB', cityTitle: 'Gomel', population: 500000},
    {id: 'UA', cityTitle: 'Kiev', population: 15000000},
    {id: 'UA', cityTitle: 'Lvov', population: 5000000},
    {id: 'UA', cityTitle: 'Poltava', population: 500000},
]

function MemoSelect(props: SelectPropsType) {

    const [currentOption, setCurrentOption] = useState('none')
    const [choseMode, setChoseMode] = useState(true)
    const [cityID, setCityID] = useState<string>('')

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
            setCityID(opt.id)
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

    // const currentCities: CityType[] = useMemo( () => {
    //     return cities.filter(el => el.id === cityID)
    // }, [cities] )

    const currentCities: CityType[] = cities.filter(el => el.id === cityID)

    const choseModeHandler = () => {
        setChoseMode(!choseMode)
    }

    return (
        <div className={s.SelectComponent}>
            <div className={s.selector}>
                <h3 className={s.header}>
                    <span className={s.MainSign}>&raquo;</span>
                    <span className={s.currentOption} onClick={choseModeHandler} >{currentOption}</span>
                </h3>

            </div>
            <div className={s.allOptions}>
                {
                    !choseMode && <div className={s.optionsToChose}>{mappedOptions}</div>
                }
            </div>
            <div>
                {choseMode? currentCities.map((el, i) => <div key={i}>{el.cityTitle}</div>) : '' }
            </div>
        </div>
    )
}

export const NewAdditionsSelect = React.memo(MemoSelect)







