import React from 'react';
import Slider from 'react-slick';
import { css } from '@emotion/core';
// Local modules
import styled from '../../core/theme';
import { Box } from '@rebass/grid/emotion';

const SliderItem = styled(Box)`
	background-color: #ccc;
	margin: 10px;
`;

function Arrow(props) {
	const { onClick, direction } = props;
	return (
		<i
			className="material-icons"
			css={css`
				color: #6d5cff;
				position: absolute;
				top: 50%;
				left: ${direction !== 'right' ? '-25px' : 'auto'};
				right: ${direction !== 'right' ? 'auto' : '-25px'};
				transform: translateY(-50%);
			`}
			onClick={onClick}
		>
			{direction !== 'right' ? 'chevron_left' : 'chevron_right'}
		</i>
	);
}

class ReviewSlider extends React.Component {
	public render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			nextArrow: <Arrow direction="right" />,
			prevArrow: <Arrow />
		};
		return (
			<Slider
				{...settings}
				css={css`
					margin-top: 100px;
				`}
			>
				<Box>
					<SliderItem>
						1: “ In these lines will be be some quotes from clients that bought
						software in CatSoft website ”
					</SliderItem>
				</Box>
				<Box>
					<SliderItem>
						2: “ In these lines will be be some quotes from clients that bought
						software in CatSoft website ”
					</SliderItem>
				</Box>
				<Box>
					<SliderItem>
						3: “ In these lines will be be some quotes from clients that bought
						software in CatSoft website ”
					</SliderItem>
				</Box>
				<Box>
					<SliderItem>
						4: lorumipn son toultom gturlamentom mmas kaskdn
					</SliderItem>
				</Box>
				<Box>
					<SliderItem>
						5: lorumipn son toultom gturlamentom mmas kaskdn
					</SliderItem>
				</Box>
			</Slider>
		);
	}
}

export default ReviewSlider;
