import { EsqueceuSenhaPage } from './../esqueceu-senha/esqueceu-senha.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pessoa: any;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
        component: EsqueceuSenhaPage
    });
    await modal.present();
  }

}
