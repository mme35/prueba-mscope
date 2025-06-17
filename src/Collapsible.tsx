import { useState, type ReactNode } from 'react';
import Chevron from './assets/chevron-down_24px.svg?react';
import './Collapsible.css';

interface CollapsibleProps {
	title: string;
	children: ReactNode;
	defaultOpen?: boolean;
	className?: string;
}

const Collapsible = ({ title, children, defaultOpen = false, className = '' }: CollapsibleProps) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`collapsible ${className}`}>
			<div className="container">
				<button onClick={toggleOpen} className="collapsible-header" aria-expanded={isOpen}>
					<div className="collapsible-icon">
						{isOpen ? (
							<Chevron className="chevron-icon chevron-up" />
						) : (
							<Chevron className="chevron-icon" />
						)}
					</div>
					<span className="collapsible-title">{title}</span>
				</button>
			</div>

			<div className={`collapsible-content ${isOpen ? 'open' : 'closed'}`}>
				<div className="collapsible-inner">{children}</div>
			</div>
		</div>
	);
};

export default Collapsible;
