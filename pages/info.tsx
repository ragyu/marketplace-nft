import { Container, Heading, Text } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';

export default function Info() {
  const address = useAddress();

  return (
    <Container maxW={'1200px'} p={5} bg="red.100">
      <Heading> Infomation </Heading>
      <Text>
        Developed by Ragyu lee. <br />
        deployed by using 0x288844E4013f07724b2f118F62F272f080b8fc19 (Account 1){' '}
        <br />
        Technology : Thirdweb, Ethers, Next.js, ChakraUI, Typescript
        <br />
      </Text>
      <br />
      <Heading> Contract Addresses </Heading>
      <Text>
        - MARKETPLACE_ADDRESS : 0xE18fB28AB467f19a75A59dAC53d199cE331369F8{' '}
        <br />
        - NFT_COLLECTION_ADDRESS : 0xbB7E345A91c0B81b6411BA2D0b4D4342A2a8865A
        <br />
        - TOKEN_DROP_ADDRESS : 0x23267f487D4E1c70Ed5AC2e1bcC72E4c37E6Df76 <br />
      </Text>
      <br />
      <Heading> Current Wallet </Heading>
      <Text>{address}</Text>
    </Container>
  );
}
