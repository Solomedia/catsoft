import styled, { breakpoints } from 'lib/theme';
import { Box, Flex } from '@rebass/grid/emotion';
// Local modules
import { Text } from 'lib/ui';
import Stars from '../Stars';

interface ReviewType {
  reviewer: string;
  comment: string;
  rate: number;
  stars: number;
  client_name: string;
  profession: string;
  company: string;
}

interface Props {
  open: boolean;
  data: ReviewType;
}

const Rate: React.SFC<Props> = props => {
  const { open, data } = props;

  if (data) {
    const {
      reviewer,
      comment,
      rate,
      stars,
      client_name,
      profession,
      company
    } = data;

    return (
      <Wrapper open={open}>
        <RateBox>
          <img src="https://via.placeholder.com/40x40" />
          <TextName>{reviewer}</TextName>
          <TextRate>{rate}</TextRate>
          <TextCount>
            OUT OF 10 <br /> (3800 + Reviews)
          </TextCount>
        </RateBox>
        {open && (
          <CommentBox>
            <TextComment>{comment}</TextComment>
            <Flex mt={1}>{<Stars stars={stars} />}</Flex>
            <TextClientInfo mt={0}>
              - {client_name} {profession} {company}
            </TextClientInfo>
          </CommentBox>
        )}
      </Wrapper>
    );
  } else return <div />;
};

const Wrapper: Box = styled(Box)`
  label: reviewBox;
  align-items: center;
  background-color: #fff;
  border-radius: ${(props: any) => (props.open ? '100px' : '50%')};
  box-shadow: ${(props: any) =>
    props.open ? '0 2px 28px 3px rgba(0, 0, 0, 0.1)' : 0};
  display: flex;
  height: 156px;
  justify-content: center;
  margin-right: 4px;
  margin-top: 16px;
  width: 156px;

  @media (min-width: ${breakpoints['sm']}) {
    height: 195px;
    margin-top: 0;
    width: ${(props: any) => (props.open ? '588px' : '195px')};
  }
`;

const CommentBox = styled(Box)`
  label: CommentBox;
  padding-left: 30px;
  @media (max-width: ${breakpoints['sm']}) {
    display: none;
  }
`;

const RateBox = styled(Box)`
  label: RateBox;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextName = styled(Text)`
  label: TextName;
  color: #000;
  font-weight: 600;
  margin-top: 5px;
  @media (min-width: ${breakpoints['sm']}) {
    font-size: 16px;
  }
`;

const TextRate = styled(TextName)`
  label: TextRate;
  font-size: 18px;
  margin-top: 0;
  @media (min-width: ${breakpoints['sm']}) {
    font-size: 26px;
  }
`;

const TextCount = styled(Text)`
  label: TextCount;
  color: ${props => props.theme.colors.waterloo};
  font-size: 11px;
  font-weight: 300;
  text-align: center;
  @media (min-width: ${breakpoints['sm']}) {
    font-size: 13px;
  }
`;

const TextComment = styled(Text)`
  label: TextComment;
  color: #555555;
  font-family: 'Georgia', sans-serif;
  font-size: 22px;
  font-style: italic;
  max-width: 366px;
`;

const TextClientInfo: Box = styled(Text)`
  label: TextClientInfo;
  font-size: 12px;
`;

export default Rate;
