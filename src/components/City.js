import { Link } from "react-router-dom";

export default function City(props) {
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{props.city.name}</h4>
                <p class="card-text">{props.city.temp}</p>
            </div>
        </div>
    );
}
