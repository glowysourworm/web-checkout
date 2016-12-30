import { Component } from '@angular/core';

@Component({
  selector: 'toolbar',
  template: `<div class="toolbar">
				<img src="/client/content/images/logo.png" />
				<h2 class="pull-right">Challenge</h2>

				<div class="clear"></div>
			</div>`,
})
export class ToolbarComponent  { name = 'Toolbar'; }