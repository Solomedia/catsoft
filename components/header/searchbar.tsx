import { css } from '@emotion/core';
import styled from '../../core/theme';

const SearchInput = styled.input`
	width: 100%;
	border-radius: 25px;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
	border: 1px solid #d4d5e2;
	font-size: 14px;
	line-height: 18px;
	height: 50px;
	padding-left: 24px;
	padding-right: 45px;
`;

const Icon = styled.i`
	color: #7f71ff;
	position: absolute;
	top: 50%;
	right: 16px;
	transform: translateY(-50%);
`;

const SearchBar = () => {
	return (
		<div
			css={css`
				position: relative;
			`}
		>
			<SearchInput placeholder="Search the entire store here" />
			<Icon className="fa fa-search" />
		</div>
	);
};

export default SearchBar;
