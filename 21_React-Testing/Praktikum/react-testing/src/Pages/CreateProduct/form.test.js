import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Form from './form';
import store from '../../store';

describe('Form component', () => {
  test('Product Name input form can accept text input and display it on the page', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const productNameInput = getByLabelText('Product Name');

    fireEvent.change(productNameInput, { target: { value: 'Test Product' } });

    expect(productNameInput.value).toBe('Test Product');
  });

  test('Additional Description input form can accept text input and display it on the page', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const productDescInput = getByLabelText('Additional Description');

    fireEvent.change(productDescInput, { target: { value: 'This is a test description.' } });

    expect(productDescInput.value).toBe('This is a test description.');
  });

  test('Product Price input form can accept numeric input and display it on the page', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const productPriceInput = getByLabelText('Product Price');

    fireEvent.change(productPriceInput, { target: { value: '100' } });

    expect(productPriceInput.value).toBe('100');
  });

  test('Product Name input form validation (Required and Characters Strict)', () => {
    const { getByLabelText, getByText, queryByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  
    const productNameInput = getByLabelText('Product Name');
  
    fireEvent.change(productNameInput, { target: { value: '' } });
    fireEvent.submit(getByText('Submit'));
  
    expect(queryByText(/Product Name cannot be empty/i)).toBeInTheDocument();
  
    fireEvent.change(productNameInput, { target: { value: '@' } });
    fireEvent.submit(getByText('Submit'));
  
    expect(queryByText(/Product Name should not contain @\/#{}\ characters/i)).toBeNull();
  });  
});
