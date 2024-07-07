const axios = require('axios');
const { expect } = require('chai');

describe('API Testing with WebdriverIO', () => {
    it('should perform a GET request to reqres.in', async () => {
        // Make a GET request to the specified URL
        const response = await axios.get('https://reqres.in/api/users?page=2');
        
        // Validate the response status
      
        expect(response.status).to.equal(200);
    });
});
