import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav    className="navbar navbar-expand-lg navbar-light bg-light">
  <div    className="container-fluid">
    {/* <a    className="navbar-brand" href="/">Navbar</a> */}
    {/* <button    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span    className="navbar-toggler-icon"></span>
    </button> */}
    <div    className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul    className="navbar-nav me-auto mb-2 mb-lg-0">
        <li    className="nav-item">
          <Link    className="nav-link active" aria-current="page" to="/Allproducts">Allproducts</Link>
        </li>
        <li    className="nav-item">
          <Link    className="nav-link active" aria-current="page" to="/Womenproducts">Women</Link>
        </li>
        <li    className="nav-item">
          <Link    className="nav-link active" to="/Menproducts">Men</Link>
        </li>

        {/* <li    className="nav-item dropdown">
          <a    className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul    className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a    className="dropdown-item" href="/">Action</a></li>
            <li><a    className="dropdown-item" href="/">Another action</a></li>
            <li><hr    className="dropdown-divider"/></li>
            <li><a    className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        <li    className="nav-item">
          <Link    className="nav-link active" to="Jewelproduct" tabIndex="-1" aria-disabled="true">Jewelery</Link>
        </li>
        <li    className="nav-item">
          <Link    className="nav-link active" to="Electproducts" tabIndex="-1" aria-disabled="true">Electronics</Link>
        </li>
        <li    className="nav-item">
          {/* <Link    className="nav-link active" to="/Address">Address</Link> */}
        </li>
        <li    className="nav-item">
          {/* <Link    className="nav-link active" to="/Pyment">Pyment</Link> */}
        </li>
        <li    className="nav-item">
          {/* <Link    className="nav-link active" to="/Summary">Summary</Link> */}
        </li>
      </ul>
      <form    className="d-flex me-auto">
        <input    className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button    className="btn btn-outline-success" type="submit">Search</button> */}
      </form>

      <ul className="navbar-nav  mb-2 mb-lg-0">

      <li    className="nav-item">
          <Link    className="nav-link active" to="/Cartcart" tabIndex="-1" aria-disabled="true">Cart</Link>
        </li>
        <li    className="nav-item">
          {/* <a    className="nav-link active" href="/" tabIndex="-1" aria-disabled="true">Signup</a> */}
        </li>
        <li    className="nav-item">
          <Link    className="nav-link active" to="/login" tabIndex="-1" aria-disabled="true" >Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header