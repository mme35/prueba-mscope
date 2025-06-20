export interface TableHeader {
	id: string;
	label: string;
}

export interface TableRowContent {
	value: string;
	className?: string;
}

export type TableRow = Record<string, TableRowContent>;

export interface TableProps {
	headers: TableHeader[];
	rows: TableRow[];
}
