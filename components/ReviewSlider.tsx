import React from 'react';
import { css } from '@emotion/core';
import { Box, Flex } from '@rebass/grid/emotion';
// Local modules
import styled from '../lib/theme';
import { Text } from '../utils/ui';
// TODO: fetch data from API.
import data from '../static/mockdata.json';
import SliderWithDashes from '../layouts/slider-with-dashes';

const ReviewSlider = () => (
	<SliderWithDashes>
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
	</SliderWithDashes>
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
