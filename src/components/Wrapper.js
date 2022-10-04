import React, { useState } from 'react';
import {
	Page, PageHeader, PageSidebar, Nav, NavItem, NavGroup
} from '@patternfly/react-core';

const Wrapper = ({ navIndex, paths, children }) => {
	const [isNavOpen, setNavOpen] = useState(true);

	const header = (
		<PageHeader
			logo={<b>Web attack playground</b>}
			showNavToggle
			isNavOpen={isNavOpen}
			onNavToggle={() => setNavOpen(!isNavOpen)}
		/>
	);

	const navigation = (
		<Nav>
			<NavGroup>
				<NavItem key={0} to="/" itemId={0} isActive={navIndex === 0}>
					Introduction
				</NavItem>
			</NavGroup>
			<NavGroup title="Attacks">
				{Object.entries(paths).map(([urlPath, {tabName}], index) =>
					<NavItem key={index} to={urlPath} itemId={index + 1} isActive={navIndex === index + 1}>
						{tabName}
					</NavItem>
				)}
			</NavGroup>
		</Nav>
	)

	const sidebar = (
		<PageSidebar
			nav={navigation}
			isNavOpen={isNavOpen}
		/>
	)

	return (
		<Page header={header} sidebar={sidebar} style={{ height: '100vh' }}>
			{children}
		</Page>
	)
};

export default Wrapper;
