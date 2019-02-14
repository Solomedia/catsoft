import React from 'react';
import Dropdown from 'react-dropdown';
import styled from 'lib/theme';

interface State {
	selected: string;
}

interface Props {
	options: string[];
}

class SelectFilter extends React.Component<Props, State> {
	public state = {
		selected: ''
	};

	private onSelect = option => this.setState({ selected: option });

	public render() {
		const { options } = this.props;
		const defaultOption = this.state.selected;
		const arrowClosed = <Icon className="material-icons">expand_more</Icon>;
		const arrowOpen = <Icon className="material-icons">expand_less</Icon>;

		return (
			<section>
				<DropdownStyled
					options={options}
					onChange={this.onSelect}
					value={defaultOption}
					arrowClosed={arrowClosed}
					arrowOpen={arrowOpen}
				/>
			</section>
		);
	}
}

const DropdownStyled = styled(Dropdown)`
	height: 44px;
	width: 167px;
	border: 1px solid #d4d5e2;
	background-color: #fff;
	padding: 0 10px;
	.Dropdown-control {
		display: flex;
		justify-content: space-between;
		height: 100%;
		align-items: center;
	}
	.Dropdown-placeholder {
		color: #727272;
		font-size: 14px;
		line-height: 18px;
		text-transform: uppercase;
	}
	.Dropdown-menu {
		background-color: #fff;
		border: 1px solid #d4d5e2;
		width: 167px;
		margin-left: -11px;
		padding: 0 10px 10px;
	}
	.Dropdown-option {
		color: #727272;
		font-size: 14px;
		line-height: 18px;
		text-transform: uppercase;
		margin-top: 10px;
	}
`;

const Icon = styled.i`
	color: #6d5cff;
`;

export default SelectFilter;
