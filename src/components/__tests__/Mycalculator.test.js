import { render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import Calculator from '../MyCalculator';

describe('reandering the calculator', () => {
  //  since we are using input as a screen so we can acctually ignore the warning "read only"
  test('number of buttons in calculator should be 19', () => {
    render(<Calculator />);
    const buttonArr = screen.getAllByRole('button');
    expect(buttonArr.length).toBe(19);
  });
});
