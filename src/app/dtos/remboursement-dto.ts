import { TypeRemboursement } from '../enums/type-remboursement';

export interface RemboursementDTO {
  id?: number;
  date?: string;
  montant?: number;
  type?: TypeRemboursement;
  creditId?: number;
}
