import { useState } from 'react';
import './Tabs.css';

interface Tab {
	id: string;
	title: string;
	disabled?: boolean;
}

interface TabsProps {
	tabList: Tab[];
	defaultTab?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabList = [], defaultTab }) => {
	const foundDefaultTabIndex = tabList.findIndex(tab => tab.id === defaultTab);
	const defaultActiveTab = foundDefaultTabIndex > 0 ? foundDefaultTabIndex : 0;
	const [activeTab, setActiveTab] = useState(defaultActiveTab);

	return (
		<div className="tabs-wrapper">
			<div className="tabs">
				{tabList.map((tab, i) => (
					<button
						key={tab.id}
						className={`tab-button ${tab.disabled ? 'tab-button-disabled' : ''} ${i === activeTab ? 'tab-button-active' : ''}`}
						disabled={tab.disabled}
						onClick={() => setActiveTab(i)}
					>
						{tab.title}
					</button>
				))}
			</div>
		</div>
	);
};

export default Tabs;
