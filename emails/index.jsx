import { Button, Html, Heading, Text } from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <Html style={{color : "white"}}>
      <Heading as="h2">Heading</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Button
      </Button>
    </Html>
  );
}

// import { render } from "@react-email/render";
// import nodemailer from "nodemailer";
// import * as React from "react";
// import { Email } from "./email";

// const transporter = nodemailer.createTransport({
//   host: "smtp.forwardemail.net",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "my_user",
//     pass: "my_password",
//   },
// });

// const emailHtml = render(<Email url="https://example.com" />);

// const options = {
//   from: "test@example.com",
//   to: "@gmail.com",
//   subject: "hello world",
//   html: emailHtml,
// };

// await transporter.sendMail(options);
