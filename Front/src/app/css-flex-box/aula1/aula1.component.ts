import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aula1',
  templateUrl: './aula1.component.html',
  styleUrls: ['./aula1.component.scss']
})
export class Aula1Component implements OnInit {
  @ViewChild('menuLateral') menu: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  public onMenu(): void {
    //const menu = document.querySelector('.menu-lateral');
    this.menu.nativeElement.classList.toggle('menu-lateral--ativo');
  }
}
