import React from 'react';
import Slider from 'react-slick';
import { css } from '@emotion/core';
import { Box, Flex } from '@rebass/grid/emotion';
// Local modules
import styled, { breakpoints } from '../../core/theme';
import { Text } from '../../utils/ui';
// TODO: fetch data from API.
import data from '../../static/mockdata.json';

const sliderSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	nextArrow: <Arrow direction="right" />,
	prevArrow: <Arrow />,
	appendDots: dots => (
		<Box
			css={css`
				bottom: -60px;
			`}
		>
			<ul
				css={css`
					li {
						height: auto;
						width: 50px;
						button:before {
							content: ' ';
							height: 4px;
							width: 50px;
							background-color: #5c56c8;
						}
					}
				`}
			>
				{dots}
			</ul>
		</Box>
	)
};

function Arrow({ onClick, direction }: any) {
	return (
		<i
			className="material-icons"
			css={css`
				color: #6d5cff;
				font-size: 60px;
				position: absolute;
				top: 50%;
				left: ${direction !== 'right' ? '-47px' : 'auto'};
				right: ${direction !== 'right' ? 'auto' : '-47px'};
				transform: translateY(-50%);
			`}
			onClick={onClick}
		>
			{direction !== 'right' ? 'chevron_left' : 'chevron_right'}
		</i>
	);
}

const ReviewSlider = () => (
	<Slider
		{...sliderSettings}
		css={css`
			margin-top: 100px;
			@media (max-width: ${breakpoints['sm']}) {
				display: none;
			}
		`}
	>
		{data &&
			data.clients_reviews &&
			data.clients_reviews.map(
				({ quote, name, profession, company, imgUrl }, i) => (
					<Box key={i}>
						<SliderItem>
							<TextQuote>{quote}</TextQuote>
							<hr
								css={css`
									width: 137px;
									border: 0;
									border-bottom: 1px solid #ddd;
									margin: 20px 0 0;
								`}
							/>
							<Flex mt={3}>
								<img src={imgUrl} />
								<TextClient>
									<span
										css={css`
											font-weight: 600;
										`}
									>
										{name}
									</span>
									<br />
									{profession} {company}
								</TextClient>
							</Flex>
						</SliderItem>
					</Box>
				)
			)}
	</Slider>
);

const SliderItem = styled(Box)`
	label: SliderItem;
	background-color: #fff;
	border: 1px solid #e6e6e6;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: auto 10px;
	min-height: 293px;
	padding: 60px 20px 50px 40px;
`;

const TextQuote = styled(Text)`
	label: TextQuote;
	color: #000032;
	font-size: 22px;
	font-family: Georgia, sans-serif;
	font-style: italic;
	max-width: 307px;
`;

const TextClient = styled(Text)`
	label: TextClient;
	color: #7f7f99;
	font-size: 12px;
	font-weight: 500;
	height: 36px;
	line-height: 18px;
	margin-left: 32px;
	width: 202px;
`;

export default ReviewSlider;
