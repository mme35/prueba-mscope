import './Nav.css';
import SearchIcon from './assets/search-lg_16px.svg?react';

export const Nav = () => {
	return (
		<>
			<header className="app-header">
				<nav className="app-nav">
					<ul>
						<li className="logo-nav-item">
							<a href="#">
								<img src="/nav-logo.svg" alt="App Logo" />
							</a>
						</li>
						<li className="nav-item">
							<a href="#">Dashboard</a>
						</li>
						<li className="nav-item">
							<a href="#">Explorer</a>
						</li>
						<li className="nav-item">
							<a href="#">Companies</a>
						</li>
						<li className="nav-item">
							<a href="#">Microsectors</a>
						</li>
						<li className="nav-item">
							<a href="#">Lists</a>
						</li>
						<li className="nav-item">
							<a href="#">
								<span>Analysis</span>
								<span className="beta-badge">Beta</span>
							</a>
						</li>
					</ul>
				</nav>
				<div className="app-header-right">
					<div className="search-container">
						<input type="text" className="search-input" placeholder="Search" />
						<button type="submit" className="search-button" aria-label="Search">
							<SearchIcon className="search-icon" />
						</button>
					</div>
					<div className="account">
						<div className="user-badge">GR</div>
						<div className="account-info">
							<div className="organization-name">Tresmares ES</div>
							<div className="email">gonzalo.rubio@msco...</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Nav;
