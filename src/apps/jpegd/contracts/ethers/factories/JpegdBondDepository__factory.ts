/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { JpegdBondDepository, JpegdBondDepositoryInterface } from '../JpegdBondDepository';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_customTreasury',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_principalToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_olympusTreasury',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_subsidyRouter',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_initialOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_olympusDAO',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '_tierCeilings',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '_fees',
        type: 'uint256[]',
      },
      {
        internalType: 'bool',
        name: '_feeInPayout',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'deposit',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'payout',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'expires',
        type: 'uint256',
      },
    ],
    name: 'BondCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'internalPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'debtRatio',
        type: 'uint256',
      },
    ],
    name: 'BondPriceChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'payout',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'remaining',
        type: 'uint256',
      },
    ],
    name: 'BondRedeemed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'initialBCV',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newBCV',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'adjustment',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'addition',
        type: 'bool',
      },
    ],
    name: 'ControlVariableAdjustment',
    type: 'event',
  },
  {
    inputs: [],
    name: 'adjustment',
    outputs: [
      {
        internalType: 'bool',
        name: 'add',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'rate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'target',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'buffer',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastBlock',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'bondInfo',
    outputs: [
      {
        internalType: 'uint256',
        name: 'payout',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vesting',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastBlock',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'truePricePaid',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bondPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: 'price_',
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
        name: '_olympusTreasury',
        type: 'address',
      },
    ],
    name: 'changeOlympusTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentDebt',
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
    name: 'currentOlympusFee',
    outputs: [
      {
        internalType: 'uint256',
        name: 'currentFee_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'debtDecay',
    outputs: [
      {
        internalType: 'uint256',
        name: 'decay_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'debtRatio',
    outputs: [
      {
        internalType: 'uint256',
        name: 'debtRatio_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxPrice',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_depositor',
        type: 'address',
      },
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_controlVariable',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_vestingTerm',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minimumPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxPayout',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxDebt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_initialDebt',
        type: 'uint256',
      },
    ],
    name: 'initializeBond',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastDecay',
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
    name: 'maxPayout',
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
    name: 'paySubsidy',
    outputs: [
      {
        internalType: 'uint256',
        name: 'payoutSinceLastSubsidy_',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'payoutFor',
    outputs: [
      {
        internalType: 'uint256',
        name: '_payout',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_fee',
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
        name: '_depositor',
        type: 'address',
      },
    ],
    name: 'pendingPayoutFor',
    outputs: [
      {
        internalType: 'uint256',
        name: 'pendingPayout_',
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
        name: '_depositor',
        type: 'address',
      },
    ],
    name: 'percentVestedFor',
    outputs: [
      {
        internalType: 'uint256',
        name: 'percentVested_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'policy',
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
        name: '_depositor',
        type: 'address',
      },
    ],
    name: 'redeem',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_addition',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_increment',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_target',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_buffer',
        type: 'uint256',
      },
    ],
    name: 'setAdjustment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum CustomBond.PARAMETER',
        name: '_parameter',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: '_input',
        type: 'uint256',
      },
    ],
    name: 'setBondTerms',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'terms',
    outputs: [
      {
        internalType: 'uint256',
        name: 'controlVariable',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vestingTerm',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minimumPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxPayout',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxDebt',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalDebt',
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
    name: 'totalPayoutGiven',
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
    name: 'totalPrincipalBonded',
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
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'transferManagment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'trueBondPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: 'price_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class JpegdBondDepository__factory {
  static readonly abi = _abi;
  static createInterface(): JpegdBondDepositoryInterface {
    return new utils.Interface(_abi) as JpegdBondDepositoryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): JpegdBondDepository {
    return new Contract(address, _abi, signerOrProvider) as JpegdBondDepository;
  }
}
