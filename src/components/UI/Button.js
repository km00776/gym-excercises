 import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';

export default function CustomButton ({text, color, onClick}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={onClick} style={{ backgroundColor: color}} variant="outlined">
        <Typography style={{textTransform: 'none', fontWeight: '600', color: 'white'}}>{text}</Typography>
      </Button>
    </Stack>
  );
}
