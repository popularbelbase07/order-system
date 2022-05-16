const functions = require('firebase-functions');
// send order in your gmail account
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;

const {email, password} = require('./config');


// configuring the transport
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: email,
        pass: password
    }
});
mailTransport.use("compile", htmlToText());
const APP_NAME = 'order-system';
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendUserEmail = functions.database
.ref("/orders/{pushId}")
.onCreate(order => {
    // console.log('sending User Email...')
    sendOrderEmail();

});

function sendOrderEmail(order){
    const mailOptions = {
        from: `${APP_NAME} <noreply@order-system.com`,
        to: order.email,
        subject: `Your order from ${APP_NAME}.`,
        html:  `
        <table style="width: 500px; margin: auto">
          <tr>
          <th>${order.displayName}</th>
          <th>You ordered some food, here's conformation of the order</th>
          </tr>

          ${order.order.map(({name, quantity, price}) => `
             <tr>
        <td>
         ${quantity}
         </td>
         <td>
         ${name}
         </td>
         <td>
         ${price}
         </td>
        </tr>
          `).join("")}

        </table>
        `
    };
    mailTransport.sendMail(mailOptions)
}

