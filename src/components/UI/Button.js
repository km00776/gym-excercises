 import * as React from 'react';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';

export default function CustomButton ({text, color}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button style={{fontWeight: '700', color: 'white', backgroundColor: color}} variant="outlined">
        {text}
      </Button>
    </Stack>
  );
}
