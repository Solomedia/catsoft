import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
// Locals
import { breakpoints } from '../core/theme';
import { RadioFilterList } from './';
import data from '../static/mockdata.json';

const { releaseCategories, versionCategories, platformCategories } = data;

interface State {
	selectedOption: string;
}

class CategoriesSideBar extends React.Component<{}, State> {
	public state = {
		selectedOption: ''
	};

	public onChangehandler = val =>
		this.setState({
			selectedOption: val
		});

	public render() {
		const { selectedOption } = this.state;
		return (
			<Box
				css={css`
					border-right: 1px solid #efefef;
					padding-right: 100px;
					max-width: 291px;
					@media (max-width: ${breakpoints['sm']}) {
						display: none;
					}
				`}
			>
				<h3
					css={css`
						color: #212b36;
						font-size: 28px;
						font-weight: 300;
					`}
				>
					Categories
				</h3>
				<Box mt={5}>
					<RadioFilterList
						title="Release"
						options={releaseCategories}
						onChangehandler={this.onChangehandler}
						selectedOption={selectedOption}
					/>
				</Box>

				<Box mt={5}>
					<RadioFilterList
						title="Versions"
						options={versionCategories}
						onChangehandler={this.onChangehandler}
						selectedOption={selectedOption}
					/>
				</Box>

				<Box mt={5}>
					<RadioFilterList
						title="Platform"
						options={platformCategories}
						onChangehandler={this.onChangehandler}
						selectedOption={selectedOption}
					/>
				</Box>
			</Box>
		);
	}
}

export default CategoriesSideBar;
