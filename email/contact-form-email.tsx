import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type ContactFormEmailProp = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProp) {
  return (
    <Html>
      <Head />
      <Preview> New Message from portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black my-10 px-10 py-4 rounded-md">
              <Heading as="h2" className="leading-tight">
                You've received the following message:
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
