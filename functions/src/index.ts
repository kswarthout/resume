import * as corsPackage from 'cors';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';

import { environment } from '../config';

const cors = corsPackage({
  origin: true
});

admin.initializeApp();

export const sendMail = functions.https.onRequest((req, res) => {
  const { name, email, website, phone, message } = req.body;
  return cors(req, res, () => {
    const text = `<div>
        <h4>Information</h4>
        <ul>
          <li>
            Name - ${name || ""}
          </li>
          <li>
            Email - ${email || ""}
          </li>
          <li>
            Website - ${website || ""}
          </li>
          <li>
            Phone - ${phone || ""}
          </li>
        </ul>
        <h4>Message</h4>
        <p>${message || ""}</p>
      </div>`;
    const sesAccessKey = environment.gmail.user;
    const sesSecretKey = environment.gmail.pass;

    const transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      auth: {
        user: sesAccessKey,
        pass: sesSecretKey
      }
    }));
    const mailOptions = {
      to: sesAccessKey,
      from: 'noreply@gmail.com',
      subject: `Portfolio Contace | ${name} sent you a new message`,
      text: text,
      html: text
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).send(error);
      }
      res.status(200).send({
        message: `Success: ${info}`
      });
    });
  })
});
