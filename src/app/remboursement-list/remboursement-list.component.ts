import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditService } from '../credit.service';
import { RemboursementDTO } from '../dtos/remboursement-dto';
import { TypeRemboursement } from '../enums/type-remboursement'; // Import the enum

@Component({
  selector: 'app-remboursement-list',
  templateUrl: './remboursement-list.component.html',
  styleUrls: ['./remboursement-list.component.css']
})
export class RemboursementListComponent implements OnInit {
  remboursements: RemboursementDTO[] = [];
  creditId!: number;

  constructor(private route: ActivatedRoute, private creditService: CreditService) {}

  ngOnInit(): void {
    this.creditId = +this.route.snapshot.paramMap.get('creditId')!;
    this.loadRemboursements();
  }

  loadRemboursements(): void {
    this.creditService.getRemboursementsByCredit(this.creditId).subscribe(data => {
      this.remboursements = data;
    });
  }

  addRemboursement(): void {
    const newRemboursement: RemboursementDTO = {
      creditId: this.creditId,
      montant: 1000,
      date: new Date().toISOString().split('T')[0],
      type: TypeRemboursement.MENSUALITE // Use the enum value
    };
    this.creditService.createRemboursement(newRemboursement).subscribe(remboursement => {
      this.loadRemboursements();
    });
  }
}
