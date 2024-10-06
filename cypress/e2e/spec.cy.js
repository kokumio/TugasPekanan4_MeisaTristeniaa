describe('SwagLabs-Login', () => {
  it('should success login', () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("input[name='user-name']").type("visual_user"); // Ganti dengan 'standard_user'
    cy.get("input[name='password']").type("secret_sauce");
    cy.get("input[type='submit']").click(); // Gunakan input type submit untuk tombol login
    
    // Memastikan pengguna berhasil login
    cy.url().should('include', '/inventory.html'); // Verifikasi bahwa URL berubah ke halaman inventaris
    cy.get('.title').should('contain', 'Products'); // Verifikasi bahwa judul halaman 'Products' muncul
  });
});