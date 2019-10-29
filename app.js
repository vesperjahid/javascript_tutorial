/// Template design old methord

const product1 = 'Pizza',
      price1 = 80,
      product2 = 'Burger',
      price2 = 60;


      let html;

      html = '<ul>'+
                '<li>Item :' + product1 + '</li>' +
                '<li>Price :' + price1 + '</li>' +
                '<li>Item :' + product2 + '</li>' +
                '<li>Price :' + price2 + '</li>' +
                '<li>Total = ' + (price1+price2) + '</li>' +
             '</ul>';


/////// Template  string or template literales

html = `
    <ul>
        <li>Item: ${product1}</li>
        <li>Price: ${price1}</li>
        <li>Item: ${product2}</li>
        <li>Price: ${price2}</li>
        <li>Total: ${price1+price2}</li>
    </ul>
`;

/*
    The new way is more clean & user friendly.
*/

let app = document.querySelector('#templateapp');
app.innerHTML = html;