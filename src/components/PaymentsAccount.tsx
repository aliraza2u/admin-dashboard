import React from 'react';
import { AppBar, Paper, Tab, Tabs } from '@material-ui/core';
import { FundingWallet } from './FundingWallet';
import { TransactionHistory } from './TransactionHistory';
import { ApolloQueryResult } from '@apollo/client';
import { GetFundingWalletResponse } from '../types';
import { CampaignStatusList } from './CampaignStatusList';
import { TabPanel } from './TabPanel';

export const coldWallet =
  process.env.NODE_ENV === 'production'
    ? '0x9f6fE7cF8CCC66477c9f7049F22FbbE35234274D'
    : '0x275EE6238D103fDBE49d4cF6358575aA914F8654';

export type RefetchWallet = (
  variables?: Partial<Record<string, any>> | undefined,
) => Promise<ApolloQueryResult<GetFundingWalletResponse>>;

export const PaymentsAccount: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          TabIndicatorProps={{ style: { backgroundColor: '#1d3faf' } }}
        >
          <Tab label="Funding Wallet" {...a11yProps(0)} className="focus:outline-none" />
          <Tab label="Campaigns" {...a11yProps(1)} className="focus:outline-none" />
          <Tab label="Transaction History" {...a11yProps(2)} className="focus:outline-none" />
        </Tabs>
      </AppBar>
      <Paper className="paper">
        <TabPanel value={value} index={0}>
          <FundingWallet />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CampaignStatusList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TransactionHistory />
        </TabPanel>
      </Paper>
    </div>
  );
};
