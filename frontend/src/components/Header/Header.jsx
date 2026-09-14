import '../../styles/header.css'
import { INSTITUTE_NAME, INSTITUTE_ICON } from '../../constants/registration'

function Header() {
  return (
    <header>
      <div className="hero">
        <img
          src={INSTITUTE_ICON.src}
          alt={INSTITUTE_ICON.alt}
          loading="lazy"
        />
      </div>
      <div>
        <h1>{INSTITUTE_NAME}</h1>
      </div>
    </header>
  )
}

export default Header
