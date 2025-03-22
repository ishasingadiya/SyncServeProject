import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  @ViewChild('chatMessages') chatMessages!: ElementRef;
  messages: { text: string, isUser: boolean }[] = [];
  userInput: string = '';
  loading: boolean = false;
  constructor(private http: HttpClient, private clipboard: Clipboard, private message: NzMessageService) {}
  ngOnInit() {}
  sendMessage() {
    if (!this.userInput.trim()) return;
    const userMessage = this.userInput;
    this.messages.push({ text: userMessage, isUser: true });
    this.userInput = '';
    this.loading = true;
    this.http.post<{ response: string }>('http://localhost:8082/api/chat', { prompt: userMessage }).subscribe({
      next: (response) => {
        this.messages.push({ text: response.response, isUser: false }); 
        this.loading = false;
        this.scrollToBottom();
      },
      error: () => {
        this.message.error('Something went wrong!');
        this.loading = false;
      }
    });
  }
  copyMessage(text: string) {
    this.clipboard.copy(text);
    this.message.success('Copied to clipboard!');
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    try {
      this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
