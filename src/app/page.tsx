import Link from "next/link";

import {
  Container,
  Heading
} from "@radix-ui/themes";


export default function Home() {
  return (
    <main>
      <Container p='3' my='5' size='1'>
        <Heading size='6'>
          Hello, Hooli Software!
        </Heading>
        <ul>
          <li><Link href='/login/'>Login page</Link></li>
          <li><Link href='/sessions/'>Session list page</Link></li>
          <li><Link href='/sessions/1/'>Session detail page</Link></li>
          <li><Link href='/sessions/feed/1/'>Session feed page</Link></li>
          <li><Link href='/customers/'>Customer list page</Link></li>
          <li><Link href='/projects/'>Project list page</Link></li>
          <li><Link href='/orders/'>Order list page</Link></li>
          <li><Link href='/transactions/'>Transaction list page</Link></li>
        </ul>
      </Container>
    </main>
  );
}
