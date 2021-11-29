import LogoImage from '../../Assets/logo.svg'
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div>
        <img 
          src={LogoImage} 
          alt='logotipo com ilustração de avião de papel' 
        />
      </div>
    </header>
  )
}

export { Header }