import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';
import { Machine } from '../machine.model';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  machines: any[];

  constructor(private inventorySvc: InventoryService) { }

  ngOnInit() {
    this.getMachines();

  }

  getMachines() {

    this.inventorySvc.getMachines().subscribe(data => {
      this.machines = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
      console.log(this.machines);
    });

  }

}
