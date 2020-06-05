import { Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public welcomeMessage = `<p>If you are interested in working with me, or want more information
                          about my work, I would love to hear from you. You can contact me using any
                          of the methods below:</p>`
  public faPaperPlane = faPaperPlane;
  public faGithub = faGithub;
  public faLinkedin = faLinkedin;

  constructor() { }

}
