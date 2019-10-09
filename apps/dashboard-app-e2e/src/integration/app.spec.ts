import { getGreeting } from '../support/app.po';

describe('dashboard-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to dashboard-app!');
  });
});
