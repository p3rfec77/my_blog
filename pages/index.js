import {
  BuyMeCoffee,
  Cover,
  Section,
  SocialNetwork,
  Title,
} from "@/components";

export default function Home() {
  return (
    <div>
      <Section>
        <Cover title="Kiril<br/> Goygin" />
        <SocialNetwork />
        <BuyMeCoffee />
      </Section>

      <Section>
        <Title>New Post</Title>
      </Section>
    </div>
  );
}
