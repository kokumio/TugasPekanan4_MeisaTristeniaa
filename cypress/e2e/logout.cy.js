describe('SwagLabs-Logout', () => {
  before(() => {
    // Melakukan login sebelum menguji logout
    cy.visit("https://www.saucedemo.com/");
    cy.get("input[name='user-name']").type("visual_user");
    cy.get("input[name='password']").type("secret_sauce");
    cy.get("input[type='submit']").click();
  });

  it('should success logout', () => {
    // Menunggu sampai halaman inventaris dimuat
    cy.url().should('include', '/inventory.html');

    // Mengklik menu burger untuk membuka sidebar
    cy.get('#react-burger-menu-btn').click();

    // Mengklik tombol logout
    cy.get('#logout_sidebar_link').click();

    // Memastikan pengguna diarahkan kembali ke halaman login
    cy.url().should('include', '/index.html');
    cy.get("input[name='user-name']").should('be.visible'); // Memastikan elemen input username terlihat
  });
});
