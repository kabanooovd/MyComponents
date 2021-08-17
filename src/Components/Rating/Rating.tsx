import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    // setRatingValue: (value: RatingValueType) => void
    // value: RatingValueType
}


function MemoRating(props: RatingPropsType) {

    const [value, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div>
            {/*<Star selected={props.value > 0} setRatingValue={() => props.setRatingValue(1)}/>*/}
            {/*<Star selected={props.value > 1} setRatingValue={() => props.setRatingValue(2)}/>*/}
            {/*<Star selected={props.value > 2} setRatingValue={() => props.setRatingValue(3)}/>*/}
            {/*<Star selected={props.value > 3} setRatingValue={() => props.setRatingValue(4)}/>*/}
            {/*<Star selected={props.value > 4} setRatingValue={() => props.setRatingValue(5)}/>*/}
            <Star selected={value > 0} setRatingValue={() => setRatingValue(1)}/>
            <Star selected={value > 1} setRatingValue={() => setRatingValue(2)}/>
            <Star selected={value > 2} setRatingValue={() => setRatingValue(3)}/>
            <Star selected={value > 3} setRatingValue={() => setRatingValue(4)}/>
            <Star selected={value > 4} setRatingValue={() => setRatingValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRatingValue: () => void

}
function Star(props: StarPropsType) {
    return <span onClick={props.setRatingValue}>
        {props.selected? <b> star </b> : ' star ' }
    </span>
}

export const Rating = React.memo(MemoRating)