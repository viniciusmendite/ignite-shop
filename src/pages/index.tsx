import { styled } from '@/styles';

const Title = styled('h1', {
  color: '$green300',
});

export default function Home() {
  return <Title>Hello World</Title>;
}
