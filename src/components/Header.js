import logo from "./../img/logo.svg"


function Header({link}){    
    
    const resultHTML =[];

    link.forEach(e => {
        resultHTML.push(<a className="nav-links__item" href={e}>{e}</a>)        
    });

    return( <>
        <header className="header">
            <div className="container">
                <div className="nav-menu">
                    <div className="nav-img">
                        <img src={logo} />
                    </div>
                
                    <nav className="nav-links">
                        {resultHTML}
                    </nav>
    
                </div>
            </div>
        </header>      
        </>
    );
}

export default Header;
