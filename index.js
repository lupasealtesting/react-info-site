
function Header(){
    return (
    <header>
    <nav className="nav">
      <img className="nav-logo" src="./react-logo.png"/>
        <ul className="nav-items">
            <li >Pricing</li>
            <li >About</li>
            <li >Contact</li>
        </ul>
      </nav>
  </header>
    )
}

function Footer(){
    return(
        <footer>
        <small>Ⓒ 2023 LupaSeal development. All rights reserved.</small>
        </footer>
    )
}

function MainContent(){
    return(
        <><h3>
            Reasons I want React as it is an amazing way to be declarative
        </h3><ol>
                <li>Because it is not difficult</li>
                <li>Less Time to code</li>
                <li>Great skill to have</li>
            </ol></>
    )
}

function Page(){
    return(
            <div>
            <Header />
            <MainContent />
            <Footer />
            </div>
    )
}

ReactDOM.render(<Page />,document.getElementById("root"))

