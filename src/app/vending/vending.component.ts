import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-vending',
  templateUrl: './vending.component.html',
  styleUrls: ['./vending.component.css']
})
export class VendingComponent implements OnInit {

  machine: any;
  products: any;
  machineObject: any;

  constructor(private inventorySvc: InventoryService) { }

  ngOnInit() {
   this.getMachine();
  }

  getMachine() {
    this.inventorySvc.getMachines().subscribe(data => {
      const random = Math.floor(Math.random() * (data.length - 0)) + 0;
      this.machineObject = data[random].payload;
      this.machine = {
          id: this.machineObject.doc.id,
          ...this.machineObject.doc.data()
        };
      const randomMachine = this.machineObject.doc.id;
      this.getProducts(randomMachine);
     });
  }

  getProducts(currentMachine) {
    this.inventorySvc.getProducts(currentMachine).subscribe(data => {
      this.products = data.map(product => {
          return {
            id: product.payload.doc.id,
            ...product.payload.doc.data()
          };
      });

     });
  }
}
