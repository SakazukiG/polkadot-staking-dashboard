// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useApi } from 'contexts/Api';
import { ConnectionStatus } from 'contexts/Api/types';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Status = () => {
  const { status } = useApi();
  const { t } = useTranslation('library');

  return (
    <>
      {status === ConnectionStatus.Disconnected && (
        <motion.p animate={{ opacity: [0, 1] }} transition={{ duration: 0.3 }}>
          {t('disconnected')}
        </motion.p>
      )}
      {status === ConnectionStatus.Connecting && (
        <motion.p animate={{ opacity: [0, 1] }} transition={{ duration: 0.3 }}>
          {t('connecting')}...
        </motion.p>
      )}
      {status === ConnectionStatus.Connected && (
        <motion.p animate={{ opacity: [0, 1] }} transition={{ duration: 0.3 }}>
          {t('connectedToNetwork')}
        </motion.p>
      )}
    </>
  );
};

export default Status;
