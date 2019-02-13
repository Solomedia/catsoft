import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import { Container, Col } from '../../utils/ui';
import styled from '../../core/theme';
import { Row } from '../../utils/ui';

export const A: any = styled.a`
	color: white;
	font-size: 12px;
	&:after {
		content: '|';
		margin: ${(props: any) => (props.separator ? '0 10px' : '0')};
		color: ${(props: any) => (props.separator ? '' : 'transparent')};
	}
`;

interface Props {
	t: (arg: string) => string;
}

const TopNav: React.SFC<Props> = props => {
	const { t } = props;
	return (
		<Box py={0}>
			<Container>
				<Row
					css={css`
						text-align: center;
					`}
					justifyContent="space-between"
				>
					<Col>
						<A href="#">{t('disclaimer')}</A>
					</Col>

					<Col>
						<A separator href="#">
							{t('terms-and-conditions')}
						</A>
						<A separator href="#">
							{t('orders-and-returns')}
						</A>
						<div
							css={css`
								font-size: 12px;
								color: white;
								display: inline;
							`}
						>
							{t('lang')}
						</div>
					</Col>
				</Row>
			</Container>
		</Box>
	);
};

export default TopNav;
