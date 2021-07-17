import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livraison-commande',
  templateUrl: './livraison-commande.component.html',
  styleUrls: ['../app.component.css']
})
export class LivraisonCommandeComponent implements OnInit {
  
  constructor() { }
  option='Laivraison à domicile';
  //option='Point de livraison';
  // option='Point de livraison chez le vendeur';
  ngOnInit(): void {
  }

}
