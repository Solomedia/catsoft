import React from 'react';
import { Flex } from '@rebass/grid/emotion';
import styled, { theme, breakpoints } from 'lib/theme';
import Overview from './Overview';
import Requirements from './Requirements';
import FAQs from './FAQs';
import Reviews from './Reviews';

import data from 'static/mockdata.json';

const { colors, fontSizes } = theme;
const { productSummary } = data;
const components = [Overview, Requirements, FAQs, Reviews];

const tabs = Object.keys(productSummary);

interface State {
  activeTab: number;
}

class ProductSummary extends React.Component<{}, State> {
  public state = {
    activeTab: 0
  };

  private handleTabClick = (tabIndex: number) => () =>
    this.setState({ activeTab: tabIndex });

  public renderSection = activeTab => {
    const Tag = components[activeTab];
    return <Tag data={productSummary[tabs[activeTab]]} />;
  };

  public render() {
    const { activeTab } = this.state;

    return (
      <>
        <Flex justifyContent="center" pt={6} pb={8} mt={8}>
          {tabs &&
            tabs.map((tab, index) => (
              <Tab
                key={index}
                active={activeTab === index}
                onClick={this.handleTabClick(index)}
              >
                {tab}
              </Tab>
            ))}
        </Flex>
        {this.renderSection(activeTab)}
      </>
    );
  }
}

const Tab: any = styled.button`
  border: none;
  background-color: inherit;
  color: #212b36;
  font-weight: ${(props: any) => (props.active ? 'bold' : 'normal')};
  font-size: ${fontSizes[1]}px;
  position: relative;
  line-height: 32px;
  margin: 0 8px;
  @media (min-width: ${breakpoints['sm']}) {
    font-size: ${fontSizes[2]}px;
    margin: 0 46px;
  }

  &:before {
    display: ${(props: any) => (props.active ? 'block' : 'none')};
    background-color: ${colors.secondary};
    content: '';
    width: 92%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

export default ProductSummary;
