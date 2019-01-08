import React from 'react';
import MiscHeader from './misc';
import * as i18Next from '../../i18n';

const { withNamespaces } = i18Next;

class Header extends React.Component<any> {
	public render() {
		const { t } = this.props;

		return (
			<header>
				<MiscHeader t={t} />
			</header>
		);
	}
}

export default withNamespaces('header')(Header);
