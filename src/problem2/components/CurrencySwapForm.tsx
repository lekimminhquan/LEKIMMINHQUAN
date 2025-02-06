'use client'
import React, { useState } from 'react';
import { NumberInput, Button, Text, Combobox, TextInput, useCombobox, ScrollArea, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import styles from '../Problem2.module.scss';
import { Prices } from '../Problem2';
import { getTokenIcon } from '@/src/utils/tokenIcons';
import Image from 'next/image';

type SwapFormValues = {
  fromToken: string;
  toToken: string;
  fromAmount: number;
};


export default function CurrencySwapForm({prices}: {prices: Prices[]}) {
  const combobox = useCombobox();
  const combobox2 = useCombobox();
  const [fromTokenUrl, setFromTokenUrl] = useState<string>('');
  const [toTokenUrl, setToTokenUrl] = useState<string>('');


  const handleFromTokenChange = (token: string) => {
    if(getTokenIcon(token)){
      setFromTokenUrl(getTokenIcon(token));
    }
  }
  const handleToTokenChange = (token: string) => {
    if(getTokenIcon(token)){
      setToTokenUrl(getTokenIcon(token));
    }
  }
  const form = useForm<SwapFormValues>({
    initialValues: {
      fromToken: '',
      toToken: '',
      fromAmount: 0,
    },
    validate: {
      fromToken: (value) => (value ? null : 'Please select a token.'),
      toToken: (value) => (value ? null : 'Please select a token.'),
      fromAmount: (value) => (value > 0 ? null : 'Enter a valid amount greater than 0'),
    },
  });
  

  let exchangeRate = 0;
  let toAmount = 0;
  if (
    prices &&
    form.values.fromToken &&
    form.values.toToken &&
    prices.find((price) => price.currency === form.values.fromToken) &&
    prices.find((price) => price.currency === form.values.toToken)
  ) {
    const fromPrice = prices.find((price) => price.currency === form.values.fromToken)?.price;
    const toPrice = prices.find((price) => price.currency === form.values.toToken)?.price;
    exchangeRate = (fromPrice && toPrice) ? fromPrice / toPrice : 0;
    toAmount = form.values.fromAmount * exchangeRate;
  }

  function onSwap(values: SwapFormValues) {
    if (values.fromToken === values.toToken) {
      form.setErrors({ toToken: 'Cannot swap the same currency' });
      return;
    }
    notifications.show({
      title: 'Notification',
      message: `Swapped ${values.fromAmount} ${values.fromToken} for ${toAmount.toFixed(6)} ${values.toToken}`,
      color: 'green',
      autoClose: 2500,
      position: 'top-right',
    });
  }


  const uniquePrices = prices.filter(
    (price, index, self) =>
      index === self.findIndex((p) => p.currency === price.currency)
  );

  const options = form.values.fromToken
    ? uniquePrices.filter((item) => item.currency !== form.values.fromToken)
    : uniquePrices;

  const options2 = form.values.toToken
    ? uniquePrices.filter((item) => item.currency !== form.values.toToken)
    : uniquePrices;

  const renderOptions = options
    .filter((item) => item.currency.toLowerCase().includes(form.values.fromToken.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item.currency} key={item.currency}>
        <div className='flex items-center gap-2'>
          <Image 
            src={getTokenIcon(item.currency)} 
            alt={item.currency} 
            width={25} 
            height={25} 
          />
          {item.currency}
        </div>
      </Combobox.Option>
    ));

  const renderOptions2 = options2
    .filter((item) => item.currency.toLowerCase().includes(form.values.toToken.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item.currency} key={item.currency}>
        <div className='flex items-center gap-2'>
          <Image src={getTokenIcon(item.currency)} alt={item.currency} width={25} height={25} />
          {item.currency}
        </div>
      </Combobox.Option>
    ));
  return (
    <Box className={styles.formContainer}>

      <form onSubmit={form.onSubmit(onSwap)} className={styles.form}>
        <Combobox
          onOptionSubmit={(optionValue) => {
            form.setFieldValue('fromToken', optionValue);
            handleFromTokenChange(optionValue);
            combobox.closeDropdown();
          }}
          store={combobox}
          {...form.getInputProps('fromToken')}
          styles={{
            dropdown: {
              width: '100%',
              overflow: 'auto',
            },
          }}
        >
          <Combobox.Target>
            <TextInput
              leftSection={ (form.values.fromToken && fromTokenUrl) ? <Image src={fromTokenUrl} alt={form.values.fromToken} width={25} height={25} /> : null}
              label={<Text size="sm" fw={600} color="dark.5">From Token</Text>}
              placeholder='Choose a token'
              value={form.values.fromToken}
              onChange={(event) => {
                form.setFieldValue('fromToken', event.currentTarget.value);
                handleFromTokenChange(event.currentTarget.value);
                combobox.openDropdown();
                combobox.updateSelectedOptionIndex();
              }}
              onClick={() => combobox.openDropdown()}
              onFocus={() => combobox.openDropdown()}
              onBlur={() => combobox.closeDropdown()}
            />
          </Combobox.Target>

          <Combobox.Dropdown>
            <Combobox.Options>
              <ScrollArea.Autosize type="scroll" mah={200}>
                {renderOptions.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : renderOptions}
              </ScrollArea.Autosize>
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
        <NumberInput
          variant='filled'
          label="Amount"
          placeholder="Enter amount"
          {...form.getInputProps('fromAmount')}
          min={1}
        />
        <Combobox
          onOptionSubmit={(optionValue) => {
            form.setFieldValue('toToken', optionValue);
            handleToTokenChange(optionValue);
            combobox2.closeDropdown();
          }}
          store={combobox2}
          {...form.getInputProps('toToken')}
        >
          <Combobox.Target>
            <TextInput
              leftSection={ (form.values.toToken && toTokenUrl) ? <Image src={toTokenUrl} alt={form.values.toToken} width={25} height={25} /> : null}
              label={<Text size="sm" fw={600} color="dark.5">To Token</Text>}
              placeholder='Choose a token'
              value={form.values.toToken}
              onChange={(event) => {
                form.setFieldValue('toToken', event.currentTarget.value);
                handleToTokenChange(event.currentTarget.value);
                combobox2.openDropdown();
                combobox2.updateSelectedOptionIndex();
              }}
              onClick={() => combobox2.openDropdown()}
              onFocus={() => combobox2.openDropdown()}
              onBlur={() => combobox2.closeDropdown()}
            />
          </Combobox.Target>

          <Combobox.Dropdown>
            <Combobox.Options>
              <ScrollArea.Autosize type="scroll" mah={200}>
                {renderOptions2.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : renderOptions2}
              </ScrollArea.Autosize>
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
        <div style={{marginTop: '12px', width: '100%', display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text fw={500} size="md">Exchange Rate:</Text>
            <Text fw={600} size="md">{exchangeRate ? exchangeRate.toFixed(6) : '0'}</Text>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text>Estimated To Amount:</Text>
            <Text fw={600} size="md">{toAmount ? toAmount.toFixed(6) : '0'}</Text>
          </div>
        </div>
        <Button type="submit" fullWidth disabled={!form.isValid()}>Swap</Button>
      </form>
    </Box>

  );
}
