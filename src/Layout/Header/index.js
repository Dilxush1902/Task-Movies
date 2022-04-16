import React from 'react';
import "./style.css";
import {FiSearch} from "react-icons/fi"
import {MdOutlineCircle} from "react-icons/md"
import {CgMenuGridO} from "react-icons/cg"

const Header = () => {
	return (
			<header
				className="d-flex   flex-wrap align-items-center justify-content-evenly justify-content-md-evenly py-2 ">
				<p  className="logo text-white d-flex align-items-center col-md-2 mb-2 mb-md-0 text-dark text-decoration-none">Movea</p>
				<ul className="nav col-12 col-md-4 d-flex justify-content-evenly mb-2 justify-content-center mb-md-0">
					<li><a href="#" className="text-white nav-link px-2 link-dark">Movies</a></li>
					<li><a href="#" className="text-white nav-link px-2 link-dark">TV Shows</a></li>
					<li><a href="#" className="text-white nav-link px-2 link-dark">Animation</a></li>
				</ul>

				<div className="col-md-4 text-end text-white">
					<button type="button" className="btn text-white shadow-none me-2 fs-4"><FiSearch/></button>
					<button type="button" className="btn text-white shadow-none me-2 fs-4"><MdOutlineCircle/></button>
					<button type="button" className="btn text-white shadow-none fs-4"><CgMenuGridO/></button>
				</div>
			</header>
	);
};

export default Header;