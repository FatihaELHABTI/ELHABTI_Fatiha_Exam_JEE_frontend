import { Component, OnInit } from '@angular/core';
import { CreditService } from '../credit.service';
import { ClientDTO } from '../dtos/client-dto';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: ClientDTO[] = [];

  constructor(private creditService: CreditService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.creditService.getClients().subscribe(data => {
      this.clients = data;
    });
  }

  addClient(): void {
    const newClient: ClientDTO = { nom: 'New Client', email: 'new@client.com' };
    this.creditService.createClient(newClient).subscribe(client => {
      this.loadClients();
    });
  }

  viewCredits(clientId: number): void {
    this.creditService.getCreditsByClient(clientId).subscribe(credits => {
      console.log(credits); // Handle credits display or navigate
    });
  }
}
