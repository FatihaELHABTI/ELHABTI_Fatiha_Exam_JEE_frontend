import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditService } from '../credit.service';
import { CreditDTO } from '../dtos/credit-dto';
import { StatutCredit } from '../enums/statut-credit'; // Import the enum

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {
  credits: CreditDTO[] = [];
  clientId!: number;

  constructor(private route: ActivatedRoute, private creditService: CreditService) {}

  ngOnInit(): void {
    this.clientId = +this.route.snapshot.paramMap.get('clientId')!;
    this.loadCredits();
  }

  loadCredits(): void {
    this.creditService.getCreditsByClient(this.clientId).subscribe(data => {
      this.credits = data;
    });
  }

  addCredit(): void {
    const newCredit: CreditDTO = {
      clientId: this.clientId,
      montant: 10000,
      dureeRemboursement: 12,
      tauxInteret: 5.0,
      statut: StatutCredit.EN_COURS, // Use the enum value
      dateDemande: new Date().toISOString().split('T')[0]
    };
    this.creditService.createCredit(newCredit).subscribe(credit => {
      this.loadCredits();
    });
  }

  viewRemboursements(creditId: number): void {
    this.creditService.getRemboursementsByCredit(creditId).subscribe(remboursements => {
      console.log(remboursements);
    });
  }
}
