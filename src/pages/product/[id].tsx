import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product';

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ad
          sit aspernatur unde labore ipsum possimus earum quia explicabo.
          Architecto ea magni consectetur eius! Nihil numquam perspiciatis quod
          qui tenetur.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
