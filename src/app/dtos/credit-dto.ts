import { StatutCredit } from '../enums/statut-credit';

export interface CreditDTO {
  id?: number;
  dateDemande?: string;
  statut?: StatutCredit;
  dateAcceptation?: string;
  montant?: number;
  dureeRemboursement?: number;
  tauxInteret?: number;
  clientId?: number;
  motif?: string;
  typeBien?: string;
  raisonSociale?: string;
}
