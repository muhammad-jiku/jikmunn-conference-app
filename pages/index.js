// external imports
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@material-ui/styles';
// internal import
import generateMuiTheme from '../src/mui/theme';

const MeetingAppContainer = dynamic(
  () => import('../src/containers/MeetingAppContainer'),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <ThemeProvider theme={generateMuiTheme()}>
      <MeetingAppContainer />
    </ThemeProvider>
  );
}
