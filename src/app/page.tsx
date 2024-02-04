import Link from "next/link";

import {
  Container,
  Heading
} from "@radix-ui/themes";


export default function Home() {
  return (
    <main>
      <Container p='3' my='5'>
        <Heading size='6'>
          Hello, Hooli Software!
        </Heading>
        <ul>
          <li><Link href='/sessions/'>Session list page</Link></li>
          <li><Link href='/sessions/1/'>Session feed page</Link></li>
        </ul>
      </Container>
    </main>
  );
}
