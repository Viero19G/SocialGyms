import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

interface Player{
  Id: number,
  Name: String,
  Score: number
}
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  playerCollectionRef: AngularFirestoreCollection<Player>;
  Players: Observable<Player[]>;


    JOGADORES = [
      {Id: 0, Name: 'Gabriel', Score:0},
      {Id: 0, Name: 'Lu', Score:0},
      {Id: 0, Name: 'Luan', Score:0},
      {Id: 0, Name: 'Gabi', Score:0},
      {Id: 0, Name: 'Alguem', Score:0}
    ]

    QtdJogadores:number;
    Jogadores:string [] = [];


  constructor(public afAuth: AngularFireAuth, afs: AngularFirestore) { 
    this.QtdJogadores = 0;

    afAuth.auth.signInAnonymously();
    this.playerCollectionRef =afs.collection('Players');
    this.Players = this.playerCollectionRef.valueChanges();
  }

  updateTotalPlayers(value) {
    this.QtdJogadores = value;
    this.Jogadores = [];
    for (let i = 0; i<this.QtdJogadores; i++) {
      this.Jogadores[i] = this.JOGADORES[i].Name;
      console.log(this.JOGADORES[i].Name);
    }
  }

  ngOnInit() {}

}
