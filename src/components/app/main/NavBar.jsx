import CartWidget from '../../CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../../CartContext';

function NavBar() {

  const { cart } = useContext(context);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand border-end pe-4">Zipi gamestore</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
            <Link to="/category/action" className="nav-link">Acción</Link>
            <Link to="/category/rpg" className="nav-link">RPG</Link>
            <Link to="/category/puzzles" className="nav-link">Puzzles</Link>
          </div>
        </div>
        {
          	cart.length > 0 ? <CartWidget /> : null
        }
      </div>
    </nav>
  );
}

export default NavBar;
