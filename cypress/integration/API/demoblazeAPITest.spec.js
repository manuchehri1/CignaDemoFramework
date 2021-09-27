

describe('demoblaze API ', () => {


    it('GET List of Phones in JSON', () => {
        cy.request({
          method: 'POST',
          url: 'https://api.demoblaze.com/bycat',
          body: {"cat": "phone"}
        })
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.Items.length).to.be.eq(7)
            expect(response.body.Items[0].price).to.be.eq(360.0)
            expect(response.body.Items[0]).to.have.all.keys(
              'cat', 'desc', 'id', 'img', 'price','title'
            )
          });
    })


    it('GET to Home Page', () => {
        cy.request({
          method: 'GET',
          url: 'https://www.demoblaze.com'
        })
        .should((response) => {
            expect(response.status).to.eq(200)
            
          });
    })
  
  
    it('GET List of Laptops in JSON', () => {
        cy.request({
          method: 'POST',
          url: 'https://api.demoblaze.com/bycat',
          body: {"cat": "notebook"}
        })
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.Items.length).to.be.eq(6)
            expect(response.body.Items[0].title).to.be.eq('Sony vaio i5')
            
          });
    })

    it('Delete Cart by placing an order', () => {
        cy.request({
          method: 'POST',
          url: 'https://api.demoblaze.com/deletecart',
          body: {"cookie": "eai_tester"}
        })
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).eq("Item deleted.")
            
          });
    })



  
  
  })