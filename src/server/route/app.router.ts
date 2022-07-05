import { createRouter } from '../createRouter'
import nodemailer from "nodemailer";

export const appRouter = createRouter()
.query('hello', {
    resolve() {
        return { 
            hello: 'world',
            foo: 'bar',
            numb: 3
        }
    }
})
.query('sendEmail', {
    async resolve({ input }) {

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'bwoody3142@gmail.com',
                pass: 'sdfaaesfw',
            }
        });

        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        return { 
            hello: 'world',
            foo: 'bar',
            numb: 3
        }
    }
})


export type AppRouter = typeof appRouter