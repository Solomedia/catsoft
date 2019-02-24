import { Box } from '@rebass/grid/emotion';
import styled from 'lib/theme';

const RenderStars = (stars: number) => {
  const starIcons = [];
  for (let x = 0; x < stars; x++) {
    starIcons.push(
      <StartIcon key={x} className="material-icons">
        star_rate
      </StartIcon>
    );
  }
  return starIcons;
};

interface Props {
  stars: number | null;
  mt?: number | number[] | string | any[];
}

const Stars: React.SFC<Props> = ({ stars, mt }) => (
  <Box mt={mt}>{RenderStars(stars)}</Box>
);

const StartIcon = styled.i`
  label: StartIcon;
  color: #ffc000;
  margin-right: 5px;
  width: 13px;
  font-size: 14px;
`;

export default Stars;
