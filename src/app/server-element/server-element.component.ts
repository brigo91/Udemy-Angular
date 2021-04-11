import { 
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string,};
  @Input() name:  string;

  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log("constructor called!");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChnages called!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("ngDoChech called!");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called!");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called!");
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy(){
    console.log("ngoOnDestroy called!");
  }
}
