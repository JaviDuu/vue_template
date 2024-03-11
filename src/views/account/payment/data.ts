import mastercard from '@/assets/img/account/mastercard.svg'
import visa from '@/assets/img/account/visa.svg'
import amex from '@/assets/img/account/amex.svg'
import bitcoin from '@/assets/img/account/bitcoin.svg'

import type { PaymentCardType } from '@/views/account/payment/type'

export const paymentCardData: PaymentCardType[] = [
  {
    image: mastercard,
    name: 'mastercard',
    cardLastDigit: 4298,
    isPrimary: true,
    validTill: '09/26'
  },
  {
    image: visa,
    name: 'visa',
    cardLastDigit: 9276,
    isPrimary: false,
    validTill: '11/25'
  },
  {
    image: amex,
    name: 'amex',
    cardLastDigit: 3854,
    isPrimary: false,
    validTill: '03/26'
  }
]

export const paymentCryptoData: PaymentCardType[] = [
  {
    image: bitcoin,
    name: 'Bitcoin (BTC)',
    lastSecretBit: 'UNky',
    isPrimary: false
  }
]
