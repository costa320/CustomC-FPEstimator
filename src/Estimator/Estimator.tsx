/** @format */

import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';

export interface Props {}

export interface State {
  numTransactions: number;
  numDataFiles: number;
  numDataFunctions: number;
  numExternalInterfaces: number;
  fp: number;
}

const FPRForm: React.FC<Props> = () => {
  const [state, setState] = useState<State>({
    numTransactions: 0,
    numDataFiles: 0,
    numDataFunctions: 0,
    numExternalInterfaces: 0,
    fp: 0,
  });

  const handleSubmit = () => {
    const { numTransactions, numDataFiles, numDataFunctions, numExternalInterfaces } = state;
    const fp = numTransactions * 4 + numDataFiles * 3 + numDataFunctions * 3 + numExternalInterfaces * 3;
    setState({ ...state, fp });
  };

  return (
    <Form>
      <Form.Item label='Number of Transactions'>
        <Input type='number' onChange={(e) => setState({ ...state, numTransactions: parseInt(e.target.value) })} />
      </Form.Item>
      <Form.Item label='Number of Data Files'>
        <Input type='number' onChange={(e) => setState({ ...state, numDataFiles: parseInt(e.target.value) })} />
      </Form.Item>
      <Form.Item label='Number of Data Functions'>
        <Input type='number' onChange={(e) => setState({ ...state, numDataFunctions: parseInt(e.target.value) })} />
      </Form.Item>
      <Form.Item label='Number of External Interfaces'>
        <Input
          type='number'
          onChange={(e) =>
            setState({
              ...state,
              numExternalInterfaces: parseInt(e.target.value),
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' onClick={handleSubmit}>
          Calculate Function Points
        </Button>
      </Form.Item>
      <Form.Item label='Estimated Function Points'>
        <Input value={state.fp} disabled />
      </Form.Item>
    </Form>
  );
};

export default FPRForm;
