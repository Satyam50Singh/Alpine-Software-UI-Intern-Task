import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  accounts : any[] = [
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
    {
      email: "gameplayer@quizeee.com",
      image: "../../../assets/images/profile-avatar.png",
      password: "*******"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
