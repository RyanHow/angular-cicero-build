import { Component } from '@angular/core';
import { Template, Clause } from '@accordproject/cicero-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cicero-build';
  template: any;
  clause: any;

  constructor() {

      const packageJson = {
      'name': 'test-contract',
      'version': '0.1.0',
      'description': 'test',
      'cicero': {
        'template': 'contract',
        'language': 'ergo',
        'version': '^0.9.1'
      }
    };

    this.template = new Template(packageJson, undefined, {txt: 'Sample text'});
    this.clause = new Clause(this.template);

  }
}
