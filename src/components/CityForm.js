import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

export default function CityForm() {
    const { addCity } = useContext(DataContext);

    function submitHandler(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        addCity(data.city)
        event.target.reset()
    }

    return (
        <form onSubmit={submitHandler} className="d-flex my-3">
            <div className="col">
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">Add a city</label>
                    <input type="text" name="city" id="city" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Add City</button>
            </div>
        </form>
    )
}
