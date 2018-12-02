import * as React from 'react';
// tslint:disable-next-line:no-import-side-effect
import './index.css';
import { Button } from 'semantic-ui-react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Home({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <Button onClick={onDecrement}>-</Button>
        <Button onClick={onIncrement}>+</Button>
      </div>
    </div>
  );
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default Home;
