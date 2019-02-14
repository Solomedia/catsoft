import React from 'react';
import styled, { breakpoints } from 'lib/theme';
import { Text } from 'utils/ui';
import { Box, Flex } from '@rebass/grid/emotion';

interface State {
	activeTab: number;
}

interface Props {
	mt?: number[];
	title: string;
	subTitle: string;
	imgUrl?: string;
	tabs: string[];
}

class BannerWithTabs extends React.Component<Props, State> {
	public state = {
		activeTab: 0
	};

	private handleTabClick = (tabIndex: number) => () =>
		this.setState({ activeTab: tabIndex });

	public render() {
		const { mt, title, subTitle, imgUrl, tabs } = this.props;
		const { activeTab } = this.state;
		return (
			<BannerBox mt={mt}>
				<Flex justifyContent="space-between">
					<Box>
						<Title>{title}</Title>
						<SubTitle>{subTitle}</SubTitle>
					</Box>
					<Box>
						<BannerImg src={imgUrl || 'https://via.placeholder.com/149x160'} />
					</Box>
				</Flex>
				<Flex>
					<TabsTitle>Choose your platform:</TabsTitle>
					{tabs &&
						tabs.map((text: string, index) => (
							<TabButton
								key={index}
								activeTab={activeTab}
								tab={index}
								onClick={this.handleTabClick(index)}
							>
								{text}
							</TabButton>
						))}
				</Flex>
			</BannerBox>
		);
	}
}

const BannerBox: Box = styled(Box)`
	label: BannerBox;
	background: linear-gradient(203.84deg, #fb9354 0%, #d9542d 100%);
	padding: 14px 20px 0;
	@media (min-width: ${breakpoints['sm']}) {
		padding: 26px 40px 0;
	}
`;

const Title = styled(Text)`
	label: Title;
	color: #fff;
	font-size: 24px;
	font-weight: 300;
	margin-top: 10px;
	@media (min-width: ${breakpoints['sm']}) {
		font-size: 28px;
		margin-top: auto;
	}
`;

const SubTitle = styled(Text)`
	label: SubTitle;
	color: #fff;
	font-size: 36px;
	font-weight: 500;
	text-transform: uppercase;
	@media (min-width: ${breakpoints['sm']}) {
		font-size: 45px;
	}
`;

const TabsTitle = styled(Text)`
	label: TabsTitle;
	color: #fff;
	line-height: 32px;
	opacity: 0.8;
	@media (max-width: ${breakpoints['sm']}) {
		display: none;
	}
`;

const BannerImg = styled.img`
	@media (max-width: ${breakpoints['sm']}) {
		max-width: 70px;
	}
`;

const TabButton: any = styled.button`
	label: TabButton;
	background-color: transparent;
	border: 0;
	margin-bottom: 1px;
	color: #fff;
	font-weight: 600;
	line-height: 32px;
	text-transform: uppercase;
	position: relative;
	opacity: ${({ activeTab, tab }: any) => (activeTab === tab ? 1 : 0.7)};
	transition: opacity 0.2s;
	width: 50%;
	@media (min-width: ${breakpoints['sm']}) {
		margin-left: 10px;
		min-width: 138px;
		width: auto;
	}
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		height: 3px;
		width: 100%;
		transform: scaleX(-1);
		background-color: #fff;
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.12);
		left: 0;
		opacity: ${({ activeTab, tab }: any) => (activeTab === tab ? 1 : 0)};
	}
`;

export default BannerWithTabs;
