import { withTheme } from 'emotion-theming';
import { Box } from '@rebass/grid/emotion';
import { A, Text, RowAlign } from './styles';
import { Container, Col } from '../../../utils/ui';

const MiscHeader = props => {
	const { t } = props;
	return (
		<Box bg={props.theme.colors.primary} py={0}>
			<Container>
				<RowAlign justifyContent="space-between">
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
						<Text>{t('lang')}</Text>
					</Col>
				</RowAlign>
			</Container>
		</Box>
	);
};

export default withTheme(MiscHeader);
