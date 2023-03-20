


function Page(){
    return(
            <div>
            <header>
              <nav>
                <img src="./react-logo.png" width="40px"/>
                </nav>
            </header>
            <h3>
                Reasons I want React as it is an amazing way to be declarative
            </h3>
            <ol>
                <li>Because it is not difficult</li>
                <li>Less Time to code</li>
                <li>Great skill to have</li>
            </ol>
            <footer>
            <small>Ⓒ 2023 LupaSeal development. All rights reserved.</small>
            </footer>
            </div>
    )
}

ReactDOM.render(<Page />,document.getElementById("root"))
