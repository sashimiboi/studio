/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface InsuracePoolTokenInterface extends utils.Interface {
  functions: {
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'burn(address,uint256,uint256)': FunctionFragment;
    'burnWeightPH(address)': FunctionFragment;
    'burnableAmtOf(address)': FunctionFragment;
    'burnableAmtPH(address)': FunctionFragment;
    'canMintPerAccountCap(address,uint256)': FunctionFragment;
    'canMintPerTotalSupply(uint256)': FunctionFragment;
    'decimals()': FunctionFragment;
    'decreaseAllowance(address,uint256)': FunctionFragment;
    'increaseAllowance(address,uint256)': FunctionFragment;
    'initializeLPToken(string,string,uint8)': FunctionFragment;
    'lpTokenBurner()': FunctionFragment;
    'lpTokenMinter()': FunctionFragment;
    'mint(address,uint256,uint256)': FunctionFragment;
    'name()': FunctionFragment;
    'owner()': FunctionFragment;
    'pauseAll()': FunctionFragment;
    'paused()': FunctionFragment;
    'pendingBurnAmtPH(address)': FunctionFragment;
    'perAccountCap()': FunctionFragment;
    'proposeToBurn(address,uint256,uint256)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rewardDebt(address)': FunctionFragment;
    'rewardDebtOf(address)': FunctionFragment;
    'setup(address,address)': FunctionFragment;
    'setupDecimals(uint8)': FunctionFragment;
    'setupMintCap(uint256,uint256)': FunctionFragment;
    'symbol()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'totalSupplyCap()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'unPauseAll()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'allowance'
      | 'approve'
      | 'balanceOf'
      | 'burn'
      | 'burnWeightPH'
      | 'burnableAmtOf'
      | 'burnableAmtPH'
      | 'canMintPerAccountCap'
      | 'canMintPerTotalSupply'
      | 'decimals'
      | 'decreaseAllowance'
      | 'increaseAllowance'
      | 'initializeLPToken'
      | 'lpTokenBurner'
      | 'lpTokenMinter'
      | 'mint'
      | 'name'
      | 'owner'
      | 'pauseAll'
      | 'paused'
      | 'pendingBurnAmtPH'
      | 'perAccountCap'
      | 'proposeToBurn'
      | 'renounceOwnership'
      | 'rewardDebt'
      | 'rewardDebtOf'
      | 'setup'
      | 'setupDecimals'
      | 'setupMintCap'
      | 'symbol'
      | 'totalSupply'
      | 'totalSupplyCap'
      | 'transfer'
      | 'transferFrom'
      | 'transferOwnership'
      | 'unPauseAll',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'allowance', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'burn',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'burnWeightPH', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'burnableAmtOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'burnableAmtPH', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'canMintPerAccountCap',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'canMintPerTotalSupply', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'initializeLPToken',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'lpTokenBurner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lpTokenMinter', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'mint',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pauseAll', values?: undefined): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pendingBurnAmtPH', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'perAccountCap', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'proposeToBurn',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardDebt', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'rewardDebtOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setup', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setupDecimals', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'setupMintCap',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupplyCap', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'unPauseAll', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnWeightPH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnableAmtOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnableAmtPH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'canMintPerAccountCap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'canMintPerTotalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decreaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initializeLPToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lpTokenBurner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lpTokenMinter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pauseAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingBurnAmtPH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'perAccountCap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposeToBurn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardDebt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardDebtOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setup', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setupDecimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setupMintCap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupplyCap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unPauseAll', data: BytesLike): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Paused(address)': EventFragment;
    'TokenBurn(address,address,uint256)': EventFragment;
    'TokenMint(address,address,uint256)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
    'Unpaused(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenBurn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenMint'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface TokenBurnEventObject {
  _from: string;
  _to: string;
  _amount: BigNumber;
}
export type TokenBurnEvent = TypedEvent<[string, string, BigNumber], TokenBurnEventObject>;

export type TokenBurnEventFilter = TypedEventFilter<TokenBurnEvent>;

export interface TokenMintEventObject {
  _from: string;
  _to: string;
  _amount: BigNumber;
}
export type TokenMintEvent = TypedEvent<[string, string, BigNumber], TokenMintEventObject>;

export type TokenMintEventFilter = TypedEventFilter<TokenMintEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface InsuracePoolToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InsuracePoolTokenInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _poolRewardPerLPToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    burnWeightPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    burnableAmtOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    burnableAmtPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    canMintPerAccountCap(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    canMintPerTotalSupply(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    initializeLPToken(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _decimals: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    lpTokenBurner(overrides?: CallOverrides): Promise<[string]>;

    lpTokenMinter(overrides?: CallOverrides): Promise<[string]>;

    mint(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _poolRewardPerLPToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pauseAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pendingBurnAmtPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    perAccountCap(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposeToBurn(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _blockWeightDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    rewardDebt(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardDebtOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    setup(
      _lpTokenMinter: PromiseOrValue<string>,
      _lpTokenBurner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setupDecimals(
      _decimals: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setupMintCap(
      _totalSupplyCap: PromiseOrValue<BigNumberish>,
      _perAccountCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupplyCap(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    unPauseAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;
  };

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    _account: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _poolRewardPerLPToken: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  burnWeightPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  burnableAmtOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  burnableAmtPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  canMintPerAccountCap(
    _account: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  canMintPerTotalSupply(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: PromiseOrValue<string>,
    subtractedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: PromiseOrValue<string>,
    addedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  initializeLPToken(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  lpTokenBurner(overrides?: CallOverrides): Promise<string>;

  lpTokenMinter(overrides?: CallOverrides): Promise<string>;

  mint(
    _account: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _poolRewardPerLPToken: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pauseAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pendingBurnAmtPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  perAccountCap(overrides?: CallOverrides): Promise<BigNumber>;

  proposeToBurn(
    _account: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _blockWeightDuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  rewardDebt(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  rewardDebtOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  setup(
    _lpTokenMinter: PromiseOrValue<string>,
    _lpTokenBurner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setupDecimals(
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setupMintCap(
    _totalSupplyCap: PromiseOrValue<BigNumberish>,
    _perAccountCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupplyCap(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  unPauseAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _poolRewardPerLPToken: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    burnWeightPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burnableAmtOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burnableAmtPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    canMintPerAccountCap(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    canMintPerTotalSupply(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    initializeLPToken(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _decimals: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    lpTokenBurner(overrides?: CallOverrides): Promise<string>;

    lpTokenMinter(overrides?: CallOverrides): Promise<string>;

    mint(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _poolRewardPerLPToken: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pauseAll(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pendingBurnAmtPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    perAccountCap(overrides?: CallOverrides): Promise<BigNumber>;

    proposeToBurn(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _blockWeightDuration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardDebt(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewardDebtOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    setup(
      _lpTokenMinter: PromiseOrValue<string>,
      _lpTokenBurner: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setupDecimals(_decimals: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    setupMintCap(
      _totalSupplyCap: PromiseOrValue<BigNumberish>,
      _perAccountCap: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyCap(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    unPauseAll(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'Paused(address)'(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    'TokenBurn(address,address,uint256)'(
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _amount?: null,
    ): TokenBurnEventFilter;
    TokenBurn(
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _amount?: null,
    ): TokenBurnEventFilter;

    'TokenMint(address,address,uint256)'(
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _amount?: null,
    ): TokenMintEventFilter;
    TokenMint(
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _amount?: null,
    ): TokenMintEventFilter;

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;

    'Unpaused(address)'(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _poolRewardPerLPToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    burnWeightPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burnableAmtOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burnableAmtPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    canMintPerAccountCap(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    canMintPerTotalSupply(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    initializeLPToken(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _decimals: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    lpTokenBurner(overrides?: CallOverrides): Promise<BigNumber>;

    lpTokenMinter(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _poolRewardPerLPToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pauseAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pendingBurnAmtPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    perAccountCap(overrides?: CallOverrides): Promise<BigNumber>;

    proposeToBurn(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _blockWeightDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    rewardDebt(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    rewardDebtOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    setup(
      _lpTokenMinter: PromiseOrValue<string>,
      _lpTokenBurner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setupDecimals(
      _decimals: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setupMintCap(
      _totalSupplyCap: PromiseOrValue<BigNumberish>,
      _perAccountCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyCap(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    unPauseAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _poolRewardPerLPToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    burnWeightPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burnableAmtOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burnableAmtPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canMintPerAccountCap(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    canMintPerTotalSupply(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    initializeLPToken(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _decimals: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    lpTokenBurner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lpTokenMinter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _poolRewardPerLPToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pauseAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingBurnAmtPH(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    perAccountCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeToBurn(
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _blockWeightDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    rewardDebt(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardDebtOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setup(
      _lpTokenMinter: PromiseOrValue<string>,
      _lpTokenBurner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setupDecimals(
      _decimals: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setupMintCap(
      _totalSupplyCap: PromiseOrValue<BigNumberish>,
      _perAccountCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupplyCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    unPauseAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;
  };
}
