import React from 'react';
import styled, { theme, breakpoints } from 'lib/theme';
import Overview from './Overview';
import Requirements from './Requirements';
import FAQs from './FAQs';
import Reviews from './Reviews';

import data from 'static/mockdata.json';

const { colors, fontSizes } = theme;
const { productSummary } = data;
const components = {
  Overview,
  Requirements,
  FAQs,
  Reviews
};

const tabs = Object.keys(productSummary);

interface State {
  activeTab: string;
}

class ProductSummary extends React.Component<{}, State> {
  public state = {
    activeTab: tabs[0]
  };

  public onClickHandler = e => {
    this.setState({ activeTab: e.target.innerHTML });
  };

  public renderSection = activeTab => {
    const Tag = components[activeTab];
    return <Tag data={productSummary[activeTab]} />;
  };

  public render() {
    const { activeTab } = this.state;

    return (
      <>
        <Tabs>
          {tabs &&
            tabs.map(tab => (
              <Tab
                active={activeTab === tab}
                key={tab}
                onClick={this.onClickHandler}
              >
                {tab}
              </Tab>
            ))}
        </Tabs>
        {this.renderSection(activeTab)}
      </>
    );
  }
}

const Tabs: any = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 30px 0 40px;
  margin-top: 40px;
`;

const Tab: any = styled.li`
  color: ${colors.ebonyClay};
  cursor: pointer;
  font-weight: ${(props: any) => (props.active ? 'bold' : 'normal')};
  font-size: ${fontSizes[2]}px;
  position: relative;
  line-height: 32px;
  margin: 0 8px;
  @media (min-width: ${breakpoints['sm']}) {
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
