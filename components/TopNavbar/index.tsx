import { useState } from 'react';

const TopNavbar = () => {
    const [showSlate, setShowSlate] = useState(false);

    const testStyle = {
        button: "nav-link dropdown-toggle",
        items: "dropdown-menu",
    }
    if (showSlate) {
        testStyle.button += " show"
        testStyle.items += " show"
    }

    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="../" className="navbar-brand">Bootswatch</a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarResponsive" style={{}}>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" id="themes">Themes <span className="caret"></span></a>
                            <div className="dropdown-menu" aria-labelledby="themes">
                                <a className="dropdown-item" href="../default/">Default</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="../cerulean/">Cerulean</a>
                                <a className="dropdown-item" href="../cosmo/">Cosmo</a>
                                <a className="dropdown-item" href="../cyborg/">Cyborg</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../help/">Help</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://blog.bootswatch.com/">Blog</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={testStyle.button} onClick={() => {
                                if (showSlate) {
                                    setShowSlate(false)
                                } else {
                                    setShowSlate(true)
                                }
                            }} href="#">Slate <span className="caret"></span></a>
                            <div className={testStyle.items} aria-labelledby="download">
                                <a className="dropdown-item" rel="noopener noreferrer" target="_blank" href="https://jsfiddle.net/bootswatch/wxnaocdm/">Open in JSFiddle</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="../5/slate/bootstrap.min.css">bootstrap.min.css</a>
                                <a className="dropdown-item" href="../5/slate/bootstrap.css">bootstrap.css</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="../5/slate/_variables.scss">_variables.scss</a>
                                <a className="dropdown-item" href="../5/slate/_bootswatch.scss">_bootswatch.scss</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-md-auto">
                        <li className="nav-item">
                            <a target="_blank" rel="noopener noreferrer" className="nav-link" href="https://github.com/thomaspark/bootswatch/"><i className="fa fa-github"></i> GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a target="_blank" rel="noopener noreferrer" className="nav-link" href="https://twitter.com/bootswatch"><i className="fa fa-twitter"></i> Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar;