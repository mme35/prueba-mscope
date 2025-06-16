import './Nav.css';
import SearchIcon from './assets/search-lg_16px.svg?react';
import Chevrons from './assets/chevrons.svg?react';

export const Nav = () => {
	return (
		<>
			<header className="app-header separator">
				<div className="container">
					<div className="nav-container">
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
										<div className="nav-item-badge">
											<span>Analysis</span>
											<span className="beta-badge">Beta</span>
										</div>
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
							<button className="account">
								<div className="user-badge">GR</div>
								<div className="account-info">
									<div className="organization-name">Tresmares ES</div>
									<div className="email">gonzalo.rubio@mscope.es</div>
								</div>
								<div>
									<Chevrons className="chevrons-icon" />
								</div>
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Nav;
