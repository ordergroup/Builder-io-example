export type DashboardAccordionProps = {
    items: DashboardAccordionItem[];
    title: string;
    isDefaultExpanded: boolean;
}

export type DashboardAccordionItem = {
    label: string;
    onClick: Function;
}