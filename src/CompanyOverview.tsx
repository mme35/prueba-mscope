import './CompanyOverview.css';
import ArrowUp from './assets/arrow-narrow-up_16px.svg?react';
import ThumbsUp from './assets/thumbs-up_16px.svg?react';
import Asterisk from './assets/asterisk.svg?react';
import Marker from './assets/marker-pin-04_16px.svg?react';
import Calendar from './assets/calendar_16px.svg?react';
import Link from './assets/link-01_16px.svg?react';

const CompanyOverview = () => {
	return (
		<div className="company-overview">
			<div className="description">
				<div>
					<h1 className="header">Company name</h1>
					<p>
						Company specializes in the development and manufacturing of weaving machines and technology.
						Known for its advanced and efficient looms, Company integrates cutting-edge technology in its
						products to enhance textile production capabilities. The company's weaving machines are renowned
						for their speed, reliability, and flexibility, making them suitable for a wide range of textile
						applications.
					</p>
				</div>
				<div className="description-sector">
					<div className="description-sector-left">
						<p>Microsector</p>
						<div className="sector-badge">
							<ArrowUp className="arrow-icon" />
							<span className="sector-badge-label"> Operators</span>
						</div>
					</div>
					<div className="description-sector-right">
						<p>Assessment of the company's classification</p>
						<div className="likes">
							<button className="like-btn">
								<ThumbsUp className="thumbs-icon" />
							</button>
							<button className="like-btn">
								<ThumbsUp className="thumbs-icon thumbs-down" />
							</button>
						</div>
					</div>
				</div>
				<div className="description-contact">
					<div className="description-contact-item">
						<Asterisk className="description-contact-icon" />
						<span>B08245671</span>
					</div>
					<div className="description-contact-item">
						<Marker className="description-contact-icon" />
						<span>Madrid, Spain</span>
					</div>
					<div className="description-contact-item">
						<Calendar className="description-contact-icon" />
						<span>2022</span>
					</div>
					<div className="description-contact-item">
						<Link className="description-contact-icon" />
						<span>www.companyname.es</span>
					</div>
				</div>
			</div>
			<div className="financials">
				<h2 className="header">Company financials</h2>
				<div className="score">
					<span className="score-grade">A1</span>
					<span className="score-label">Score</span>
				</div>
				<div className="financials-data">
					<div className="financials-data-column">
						<div className="financials-data-item">
							<span className="financials-data-value">€30M</span>
							<span className="financials-data-label">Turnover</span>
						</div>
						<div className="financials-data-item">
							<span className="financials-data-value">6.1%</span>
							<span className="financials-data-label">5Y T/O CAGR</span>
						</div>
						<div className="financials-data-item">
							<span className="financials-data-value">8.5%</span>
							<span className="financials-data-label">EBITDA Margin</span>
						</div>
					</div>
					<div className="financials-data-column">
						<div className="financials-data-item">
							<span className="financials-data-value">€5M</span>
							<span className="financials-data-label">EBITDA</span>
						</div>
						<div className="financials-data-item">
							<span className="financials-data-value">4.3%</span>
							<span className="financials-data-label">5Y EBITDA CAGR</span>
						</div>
						<div className="financials-data-item">
							<span className="financials-data-value">2.4x</span>
							<span className="financials-data-label">NFD/EBITDA</span>
						</div>
					</div>
				</div>
			</div>
			<div className="indicators">
				<h2 className="header">mscope score indicators</h2>
				<div>
					<img src="./indicators.svg" />
					<div className="indicators-legend">
						<img src="./indicators-legend.svg" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CompanyOverview;
