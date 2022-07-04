import "./styles.css"

type Props = {
    name: string,
    time: any
}

export function Card(props: Props){
    return(
        <div className="card">
            <strong> {props.name} </strong>
            <small>{props.time}</small>
        </div>
    )
}