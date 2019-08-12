import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Machine } from 'src/app/machine.model';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private firestore: AngularFirestore) { }

  getMachines() {
    return this.firestore.collection('machines').snapshotChanges();
  }

  getProducts(machine) {
    return this.firestore.collection('machines').doc(machine).collection('products').snapshotChanges();
  }
}
