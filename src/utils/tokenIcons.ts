import ATOM from '@/public/tokens/ATOM.svg';
import BLUR from '@/public/tokens/BLUR.svg';
import BTC from '@/public/tokens/BTC.svg';
import BUSD from '@/public/tokens/BUSD.svg';
import DAI from '@/public/tokens/DAI.svg';
import ETH from '@/public/tokens/ETH.svg';
import GMX from '@/public/tokens/GMX.svg';
import IBCX from '@/public/tokens/IBCX.svg';
import LSI from '@/public/tokens/LSI.svg';
import LUNA from '@/public/tokens/LUNA.svg';
import MATIC from '@/public/tokens/MATIC.svg';
import OSMO from '@/public/tokens/OSMO.svg';
import STEVMOS from '@/public/tokens/STEVMOS.svg';
import STRD from '@/public/tokens/STRD.svg';
import SWTH from '@/public/tokens/SWTH.svg';
import USD from '@/public/tokens/USD.svg';
import USDC from '@/public/tokens/USDC.svg';
import USC from '@/public/tokens/USC.svg';
import WBTC from '@/public/tokens/WBTC.svg';
import WETH from '@/public/tokens/WETH.svg';
import YFI from '@/public/tokens/YFI.svg';
import ZIL from '@/public/tokens/ZIL.svg';
import wstETH from '@/public/tokens/wstETH.svg';
import YieldUSD from '@/public/tokens/YieldUSD.svg';
import OKT from '@/public/tokens/OKT.svg';
import OKB from '@/public/tokens/OKB.svg';
import rSWTH from '@/public/tokens/rSWTH.svg';
import STLUNA from '@/public/tokens/STLUNA.svg';
import bNEO from '@/public/tokens/bNEO.svg';
import RATOM from '@/public/tokens/RATOM.svg';
import EVMOS from '@/public/tokens/EVMOS.svg'; 
import IRIS from '@/public/tokens/IRIS.svg';
import ampLUNA from '@/public/tokens/ampLUNA.svg';
import KUJI from '@/public/tokens/KUJI.svg';
import axlUSDC from '@/public/tokens/axlUSDC.svg';
import STOSMO from '@/public/tokens/STOSMO.svg';
import STATOM from '@/public/tokens/STATOM.svg';

export const TokenIcons = {
  ATOM,
  BLUR,
  BTC,
  BUSD,
  DAI,
  ETH,
  GMX,
  IBCX,
  LSI,
  LUNA,
  MATIC,
  OSMO,
  STEVMOS,
  STRD,
  SWTH,
  USD,
  USDC,
  USC,
  WBTC,
  WETH,
  YFI,
  ZIL,
  wstETH,
  YieldUSD,
  OKT,
  OKB,
  rSWTH,
  STLUNA,
  bNEO,
  RATOM,
  EVMOS,
  IRIS,
  ampLUNA,
  KUJI,
  STOSMO,
  axlUSDC,
  STATOM,
} as const;

export type TokenIconName = keyof typeof TokenIcons;

export const getTokenIcon = (name: string) => {
  if(TokenIcons[name as TokenIconName]){
    return TokenIcons[name as TokenIconName]
  }
  return null
}; 