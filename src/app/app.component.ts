import { Component } from '@angular/core';
import { UserStorageService } from './basic/services/storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ServiceBookSystemWeb';
  isDropdownOpen: boolean = false;
  dropdownOpen = false; 
  isMobileMenuOpen = false;

  isClientLoggedIn: boolean = UserStorageService.isClientLoggedIn();
  isCompanyLoggedIn: boolean = UserStorageService.isCompanyLoggedIn();

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      this.isClientLoggedIn = UserStorageService.isClientLoggedIn();
      this.isCompanyLoggedIn = UserStorageService.isCompanyLoggedIn();

    })
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {
    console.log("User logged out");
    this.dropdownOpen = false; 
    UserStorageService.signOut();
    this.router.navigateByUrl('home');
  }
}
