/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  PancakeswapStablePoolRegistry,
  PancakeswapStablePoolRegistryInterface,
} from '../PancakeswapStablePoolRegistry';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'swapContract',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenA',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenB',
        type: 'address',
      },
    ],
    name: 'NewStableSwapPair',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'N_COINS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenA',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tokenB',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_A',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_fee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_admin_fee',
        type: 'uint256',
      },
    ],
    name: 'createSwapPair',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenA',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tokenB',
        type: 'address',
      },
    ],
    name: 'getPairInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'swapContract',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'token0',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'token1',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'LPContract',
            type: 'address',
          },
        ],
        internalType: 'struct PancakeStableSwapFactory.StableSwapPairInfo',
        name: 'info',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pairLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'swapPairContract',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class PancakeswapStablePoolRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): PancakeswapStablePoolRegistryInterface {
    return new utils.Interface(_abi) as PancakeswapStablePoolRegistryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PancakeswapStablePoolRegistry {
    return new Contract(address, _abi, signerOrProvider) as PancakeswapStablePoolRegistry;
  }
}
