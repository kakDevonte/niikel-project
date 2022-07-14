import React from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const AuthPage: React.FC = () => {
  return (
    <div>
      <Input />
      <Input />
      <Button variant={'primary'}>Вход</Button>
    </div>
  );
};
