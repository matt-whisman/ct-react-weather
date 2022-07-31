import { Authcontext } from "./contexts/AuthProvider";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    const { login, logout, user } = useContext(Authcontext);
    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            Weather
                        </Link>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="collapsibleNavId"
                        >
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home{" "}
                                        <span className="visually-hidden">
                                            (current)
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        Link
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                {user.loggedIn ? (
                                    <li className="nav-item">
                                        <button onClick={logout}>Logout</button>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <button onClick={login}>Login</button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </Router>
        </>
    );
}

export default App;
