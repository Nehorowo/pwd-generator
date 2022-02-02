import React from 'react';
import './App.css';
import PasswordGenerator from './PasswordGenerator';
import { BaseProvider, LightTheme, DarkTheme } from 'baseui';
import { Button } from 'baseui/button';
import { Card } from 'baseui/card';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

function App() {
  const engine = new Styletron();

  const THEME = {
    light: 'light',
    dark: 'dark',
  };
  const [theme, setTheme] = React.useState(THEME.light);
  return (
    <div className="App">
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
          <Button onClick={() => setTheme(theme === THEME.light ? THEME.dark : THEME.light)}>
            Переключение светлой/темной темы!
          </Button>
          <Card title="Password Generator App">
            <PasswordGenerator />
          </Card>
        </BaseProvider>
      </StyletronProvider>
    </div>
  );
}

export default App;
