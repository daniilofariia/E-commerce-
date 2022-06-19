import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../views/Services/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './pagamentogoogle.component.html',
  styleUrls: ['./pagamentogoogle.component.css']
})

export class PagamentogoogleComponent {
  title = 'PagamentoViagoogle'
 
  buttonColor="black";
  buttontype="buy";
  isCustomSize = false;
  buttonWidth = 240;
  buttonHeight = 50;
  isTop = window ===window.top;

  paymentRequest = {
    apiVersion:2,
    apiVersionMinor: 0,
    alloewdPaymentMethods:[
      {
        type: 'CARD',
      parameters: {
        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
        allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
      },
      tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        parameters: {
          gateway: 'example',
          gatewayMerchantId: 'exampleGatewayMerchantId'
        }
      }
    }
  ],
  merchantInfo: {
    merchantId: '12345678901234567890',
    merchantName: 'Demo Merchant'
  },
  transactionInfo: {
    totalPriceStatus: 'FINAL',
    totalPriceLabel: 'Total',
    totalPrice: '100.00',
    currencyCode: 'USD',
    countryCode: 'US'
  }
};

onLoadPaymentData(event:any) : void
{


} constructor(private loadingservice: LoadingService){

}
}

  


