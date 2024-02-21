'use client';

import { createStyles } from 'antd-style';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Flexbox } from 'react-layout-kit';

export const useStyles = createStyles(({ token }) => ({
  conversationWrapper: {
    position: 'relative',
    backgroundColor: token.colorBgLayout,
  },
}));

interface ConversationProps {
  data?: any;
}

const Conversation = React.memo<ConversationProps>(() => {
  const pathname = usePathname();
  const { styles } = useStyles();
  return (
    <Flexbox className={styles.conversationWrapper} flex={1} horizontal>
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <div>对话框</div>
        <div>{pathname}</div>
      </div>
    </Flexbox>
  );
});

export default Conversation;
