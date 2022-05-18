import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer';
import { getMaxListeners } from "process";

 const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fc39f3b2245903",
      pass: "e1cc2bc5813d47"
    }
  }); 

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail ({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe dev<dev@gmail.com',
            to:'Carlos<carlos@gmail.com>',
            subject,
            html: body,
        });
    }
}