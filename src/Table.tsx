import './Table.css';

interface TableHeader {
	id: string;
	label: string;
}

interface TableRowContent {
	value: string;
	className?: string;
}

type TableRow = Record<string, TableRowContent>;

interface TableProps {
	headers: TableHeader[];
	rows: TableRow[];
}

const Table: React.FC<TableProps> = ({ headers, rows = [] }) => {
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						{headers.map(header => (
							<th key={header.id} className="table-header">
								{header.label}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, index) => (
						<tr key={index} className="table-row">
							{headers.map(header => (
								<td key={header.id} className={`table-cell ${row[header.id]?.className || ''}`}>
									{row[header.id]?.value || ''}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
