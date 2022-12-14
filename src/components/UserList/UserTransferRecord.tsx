import React, { FC } from 'react';
import styles from './userList.module.css';
import headingStyles from '../../assets/styles/heading.module.css';
import { UserTransferTypes, CurrencyTypes } from '../../types';

const UserTransferRecord: FC<UserTransferTypes> = ({ transferUserRecord }) => {
  return (
    <div className={styles.transferSide}>
      <h3 className={headingStyles.headingSm}>Transfer User Record</h3>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeadRow}>
              <th className={styles.tableColumn}>Balance</th>
              <th className={styles.tableColumn}>Min. Withdraw Amount</th>
              <th className={styles.tableColumn}>USD Balance</th>
              <th className={styles.tableColumn}>Symbol</th>
              <th className={styles.tableColumn}>Network</th>
            </tr>
          </thead>
          <tbody>
            {transferUserRecord.length > 0 ? (
              transferUserRecord.map((transfer: CurrencyTypes, index: number) => (
                <tr className={styles.tableBodyRow} key={index}>
                  <td className={styles.tableColumn}>{transfer.balance}</td>
                  <td className={styles.tableColumn}>{transfer.minWithdrawAmount}</td>
                  <td className={styles.tableColumn}>{transfer.usdBalance}</td>
                  <td className={styles.tableColumn}>{transfer.symbol}</td>
                  <td className={styles.tableColumn}>{transfer.network}</td>
                </tr>
              ))
            ) : (
              <p className="p-2">No transfer record found</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTransferRecord;
