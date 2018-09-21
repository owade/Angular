export class Customer {
    UserID: string;
    LastName: string;
    FirstName: string;
    City: string;
    constructor() {
      this.UserID = (Math.floor(Math.random() * (200 - 10 + 1)) + 10).toString();
      this.LastName = '';
      this.FirstName = '';
      this.City = '';
    }
  }
