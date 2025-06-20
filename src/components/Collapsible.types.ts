import type { ReactNode } from "react";

export interface CollapsibleProps {
	title: string;
	children: ReactNode;
	defaultOpen?: boolean;
	className?: string;
}
