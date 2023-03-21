
function Header(){
    return (
    <header>
    <nav>
      <img src="./react-logo.png" width="40px"/>
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

