import ProductCard from '../ProductCard';
import ProductsJSON from '../../data/products.json';

export default function ProductsGrid({ className }) {
  return (
    <div className={'grid grid-cols-3 gap-2' + ' ' + className}>
      {ProductsJSON.slice(0, 6).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
