/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './css/navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light px-4">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Aplikasi CRUD</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <NavLink to="/" className='links' aria-current="page" activeclassname="active">
                                    <a>List Produk</a>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to="/create" className='links' activeclassname="active">
                                    <a>Buat Produk</a>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar