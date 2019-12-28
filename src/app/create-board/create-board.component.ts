import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { TrelloBoardService } from '../trello-board.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent implements OnInit {
  boardName: string;
  editBoardName: string;
  angForm: FormGroup;
  constructor(private router: Router, private trelloBoardService: TrelloBoardService, private formbuilder: FormBuilder) { }

  ngOnInit() {
    // this.trelloBoardService.cast.subscribe(boardName=> this.boardName = boardName);
    this.createForm();
  }

  createForm() {
  this.angForm = this.formbuilder.group({
  BoardName: ['', Validators.required ],
    });
  }

   get boardNamefromForm(): any {
   return this.angForm.get('BoardName');
  }

  createBoard() {
    this.router.navigate(['board-list/' + this.boardNamefromForm.value]);
  }

}
