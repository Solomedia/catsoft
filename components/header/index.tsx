import React from 'react';
import TopNav from './top-nav';
import * as i18Next from '../../i18n';
import SearchBar from './searchbar';

const { withNamespaces } = i18Next;

class Header extends React.Component<any> {
	public render() {
		const { t } = this.props;

		return (
			<header>
				<TopNav t={t} />
				<SearchBar />
			</header>
		);
	}
}

export default withNamespaces('header')(Header);
