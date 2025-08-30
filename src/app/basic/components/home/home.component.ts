import { Component } from '@angular/core';

interface Service {
  title: string;
  icon: string;
  description: string;
  keywords: string[];
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchText: string = '';
  allServices: Service[] = [
    {
      title: 'TV Repair & Installation',
      icon: 'tool',
      description: 'Expert TV repair and professional mounting services',
      keywords: ['tv', 'television', 'mounting', 'installation', 'repair', 'smart tv'],
      color: '#1890ff'
    },
    {
      title: 'Electronics Troubleshooting',
      icon: 'tool',
      description: 'Diagnostic and repair for all electronic devices',
      keywords: ['electronics', 'devices', 'gadgets', 'repair', 'troubleshoot'],
      color: '#722ed1'
    },
    {
      title: 'Painting & Waterproofing',
      icon: 'bg-colors',
      description: 'Quality painting and lasting waterproofing solutions',
      keywords: ['paint', 'waterproof', 'wall', 'house', 'color'],
      color: '#eb2f96'
    },
    {
      title: 'AC Repair & Servicing',
      icon: 'cloud',
      description: 'Professional AC servicing, gas refilling, and repairs',
      keywords: ['ac', 'air conditioner', 'cooling', 'maintenance', 'repair'],
      color: '#34d399'
    },
    {
      title: 'Plumbing Services',
      icon: 'fire',
      description: 'Leak fixing, pipe repairs, and full plumbing solutions',
      keywords: ['plumbing', 'pipes', 'leak', 'fix', 'installation'],
      color: '#f59e0b'
    },
    {
      title: 'Home Cleaning',
      icon: 'smile',
      description: 'Deep cleaning services for homes and offices',
      keywords: ['cleaning', 'home', 'office', 'sanitize', 'deep clean'],
      color: '#3b82f6'
    }
  ];
  
  filteredServices: Service[] = [...this.allServices];

  onSearch() {
    const searchTerm = this.searchText.toLowerCase().trim();
  
    if (!searchTerm) {
      this.filteredServices = [...this.allServices];
      return;
    }
  
    this.filteredServices = this.allServices.filter(service =>
      [service.title, service.description, ...service.keywords]
        .some(text => text.toLowerCase().includes(searchTerm))
    );
  }  

  getSuggestions(): string[] {
    const searchTerm = this.searchText.toLowerCase().trim();
    const allKeywords = this.allServices.flatMap(service => service.keywords);
    return allKeywords
      .filter(keyword => keyword.includes(searchTerm))
      .slice(0, 5);
  }
  showChatbot = false;

  toggleChatbot() {
    this.showChatbot = !this.showChatbot;
  }
}