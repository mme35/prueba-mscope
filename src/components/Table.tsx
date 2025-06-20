import './Table.css';
import DownloadIcon from '../assets/download-01_16px.svg?react';
import type { TableProps } from './Table.types';

const Table: React.FC<TableProps> = ({ headers, rows = [] }) => {
	return (
		<div className="table-wrapper">
			<div className="table-actions">
				<button className="export-button">
					<DownloadIcon className="download-icon" />
					<span>Export</span>
				</button>
			</div>
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
