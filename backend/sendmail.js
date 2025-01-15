import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: "koshleshkumar21@gmail.com", 
      pass: "wlvs xnbg ohuf vlcj",
    },
    pool: true,               
    maxConnections: 5,        
    maxMessages: 10,  
  });

  export const sendEmail = async (email, invoicePdf) => {
    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: email, 
      subject: "Your Invoice from Maruti Hardware",
      text: `Hello,
      Thank you for choosing our services. Please find the attached invoice for your records.
      Should you have any questions or concerns, feel free to reach out to us at koshleshkumar21@gmail.com.
      Best regards, Maruti Hardware
  `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #007bff;">Thank you for your business!</h2>
          <p>Dear Valued Customer,</p>
          <p>We appreciate your trust in our services. Please find the details of your invoice below:</p>
          <p style="margin: 20px 0; background: #f8f9fa; padding: 10px; border-left: 4px solid #007bff;">
            <strong>Note:</strong> If you have any questions regarding this invoice, feel free to contact us at <a href="mailto:koshleshkumar21@gmail.com" style="color: #007bff;">koshleshkumar21@gmail.com</a>.
          </p>
          <p>Best regards,<br><strong>The Team</strong></p>
        </div>
      `,
      attachments: [
        {
          filename: "invoice-001.pdf",
          content: invoicePdf.buffer,
          encoding: "base64",
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Invoice sent successfully', error);
      }

      // } else {
      //   console.log('Email sent:', info.response);
      // }
    });
  };