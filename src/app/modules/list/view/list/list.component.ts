import { Component } from '@angular/core';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  users: User[] = [
    {
      name: 'Marta Perez',
      password: '123123123',
      direccion: 'Madrid, España',
      telefono: '676123987',
      email: 'martaperez@gmail.com',
      imageUrl: 'https://www.linkedin-makeover.com/wp-content/uploads/2018/01/Donna-Serdula-FAVICON-300x300.png'
    },
    {
      name: 'Luis Sanchez',
      password: '123123123',
      direccion: 'Sevilla, España',
      telefono: '676123563',
      email: 'luissanchez@gmail.com',
      imageUrl: 'http://thispix.com/wp-content/uploads/2015/06/portrait-profile-006.jpg'
    },
    {
      name: 'Mario Marquez',
      password: '123123123',
      direccion: 'Galicia, España',
      telefono: '676123765',
      email: 'mariomarquez@gmail.com',
      imageUrl: 'https://crastina.se/wp-content/uploads/2017/11/Nikola-Vukovic-772x1030.jpeg'
    },
    {
      name: 'Carmen Rivera',
      password: '123123123',
      direccion: 'Barcelona, España',
      telefono: '676123126',
      email: 'carmenrivera@gmail.com',
      imageUrl: 'http://www.legalwebpro.com/images/user/1101_1200/1139/S_08final2_2.jpg'
    }
  ];
}
