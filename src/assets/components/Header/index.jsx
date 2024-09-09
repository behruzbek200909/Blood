import "./header.css";
import Logo from "../../assets/img/logo.png"

export const Header = () => {
    return (
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a href="#" className="header-logo-link">
              <img src={Logo} alt="" width={138} height={48} />
            </a>
            <nav>
              <ul className="header-list">
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Bosh sahifa
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Biz haqimizda
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Rasmlar
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Savollar
                  </a>
                </li>
                 <li className="header-item">
                <a href="#" className="header-item-link">
                    <button className="header-btn">Bog'lanish</button>
                    </a>
                    </li>
                    
              </ul>
            </nav>
          </div>
        </div>
      </header>
    ); 
}
