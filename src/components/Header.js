
function Header({onDarkModeClick, setIsDarkMode}){
    return(
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {setIsDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      )
    }

    export default Header