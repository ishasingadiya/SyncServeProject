import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  faqs = [
    { question: 'How do I book a service?', answer: 'You can book a service through our website or mobile app with just a few clicks.', open: false },
    { question: 'Are your professionals verified?', answer: 'Yes, all our professionals undergo a strict verification process before they are listed.', open: false },
    { question: 'What if I am not satisfied with the service?', answer: 'We offer a customer satisfaction guarantee. If you\'re not happy, we will work to make it right.', open: false },
    { question: 'Do you offer 24/7 support?', answer: 'Yes, our customer support team is available round the clock to assist you.', open: false }
  ];

  toggleFaq(item: any) {
    item.open = !item.open;
  }
}
