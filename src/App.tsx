import './App.css';
import Nav from './Nav';
import Separator from './Separator';
import CompanyOverview from './CompanyOverview';
import Tabs from './Tabs';
import Collapsible from './Collapsible';
import IncomeStatementGraphs from './IncomeStatementGraphs';
import Table from './Table';

const headers = [
	{ id: 'metric', label: 'Income Statement (€M)' },
	{ id: 'cagr', label: '5Y CAGR (%)' },
	{ id: 'turnover', label: 'Turnover (%)' },
	{ id: 'y2013', label: '2013' },
	{ id: 'y2014', label: '2014' },
	{ id: 'y2015', label: '2015' },
	{ id: 'y2016', label: '2016' },
	{ id: 'y2017', label: '2017' },
	{ id: 'y2018', label: '2018' },
	{ id: 'y2019', label: '2019' },
	{ id: 'y2020', label: '2020' },
	{ id: 'y2021', label: '2021' },
	{ id: 'y2022', label: '2022' },
	{ id: 'y2023', label: '2023' },
	{ id: 'y2024', label: '2024' },
];

const rows = [
	{
		metric: { value: 'Turnover', className: 'main' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'Cost of sales' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'Gross profit', className: 'main' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'Admin & Op. Expenses' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'Other operating Income/Cost' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'Normalized EBITDA', className: 'main' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'Extraordinary items' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'Other asset-related works' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'EBIT', className: 'main' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'Financial Income' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'Financial Expenses' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'EBT', className: 'main' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'Taxes' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
	{
		metric: { value: 'Net profit', className: 'main' },
		cagr: { value: '27.2' },
		turnover: { value: '100' },
		y2013: { value: '5.2' },
		y2014: { value: '5.2' },
		y2015: { value: '5.2' },
		y2016: { value: '5.2' },
		y2017: { value: '5.2' },
		y2018: { value: '5.2' },
		y2019: { value: '5.2' },
		y2020: { value: '5.2' },
		y2021: { value: '5.2' },
		y2022: { value: '5.2' },
		y2023: { value: '5.2' },
		y2024: { value: '5.2' },
	},
];

const tabList = [
	{ id: 'summary', title: 'Summary', disabled: false },
	{ id: 'financials', title: 'Financials', disabled: false },
	{ id: 'peers', title: 'Peers', disabled: false },
	{ id: 'companyInfo', title: 'Company info', disabled: false },
	{ id: 'news', title: 'News and events', disabled: false },
];

function App() {
	return (
		<>
			<Nav />
			<main>
				<div className="container">
					<CompanyOverview />
				</div>
				<Separator />
				<div className="container">
					<Tabs tabList={tabList} defaultTab="financials" />
				</div>
				<div className="mt-40"></div>
				<Collapsible title="Income Statement" defaultOpen={true}>
					<div className="container">
						<IncomeStatementGraphs />
					</div>
					<Separator />
					<div className="container">
						<Table headers={headers} rows={rows} />
					</div>
				</Collapsible>
				<Separator />
				<Collapsible title="Balance Sheet">
					<div className="container">
						<p>Placeholder content</p>
					</div>
				</Collapsible>
				<Separator />
				<Collapsible title="Cashflow">
					<div className="container">
						<p>Placeholder content</p>
					</div>
				</Collapsible>
				<Separator />
			</main>
		</>
	);
}

export default App;
