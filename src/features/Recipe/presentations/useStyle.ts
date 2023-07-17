import { createStyles, rem } from '@mantine/core';

export const PRIMARY_COL_HEIGHT = rem(300);
export const useStyles = createStyles((theme) => ({
  mainImage: {
    height: PRIMARY_COL_HEIGHT,
    color: 'white',
  },

  secondaryColumn: {
    border: '0.0625rem solid #dee2e6',
    borderRadius: '0.5rem',
    minHeight: '120px',
    padding: '4px 12px',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: '24px',
  },

  description: {
    paddingTop: '4px',
  },
}));
