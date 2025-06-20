export interface Tab {
	id: string;
	title: string;
	disabled?: boolean;
}

export interface TabsProps {
	tabList: Tab[];
	defaultTab?: string;
}
