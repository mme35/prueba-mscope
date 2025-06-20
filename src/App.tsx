import Nav from './Nav';
import Separator from './components/Separator';
import CompanyOverview from './CompanyOverview';
import Tabs from './components/Tabs';
import Collapsible from './components/Collapsible';
import IncomeStatementGraphs from './IncomeStatementGraphs';
import Table from './components/Table';
import { tabList, headers, rows } from './static-data';

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
					<div className="container"></div>
				</Collapsible>
				<Separator />
				<Collapsible title="Cashflow">
					<div className="container"></div>
				</Collapsible>
				<Separator />
			</main>
		</>
	);
}

export default App;
