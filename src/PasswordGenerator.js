import React from 'react';
import { Block } from 'baseui/block';
import { Input } from 'baseui/input';
import { Slider } from 'baseui/slider';
import { Button } from 'baseui/button';

const PasswordGenerator = () => {
  let [pwd, updatePwd] = React.useState('');
  let [pwdLength, updatePwdLength] = React.useState([8]);
  function generatePassword(length) {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let retVal = '';
    let i = 0;
    let n = charset.length;
    for (i = 0; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    updatePwd(retVal);
  }
  return (
    <Block>
      <Block>
        <Input
          value={pwd}
          placeholder="Здесь помещается ваш пароль, сгенерированный автоматически..."></Input>
      </Block>
      <Block>
        Length: {pwdLength}
        <Slider
          value={pwdLength}
          marks
          onChange={({ value }) => updatePwdLength(value)}
          onFinalChange={({ value }) => generatePassword(value)}
          min={0}
          max={20}
        />
      </Block>
      <Block>
        <Button onClick={() => generatePassword(pwdLength)}>Generate</Button>
      </Block>
    </Block>
  );
};

export default PasswordGenerator;
