import { Suspense } from 'react'
import { listProducts } from '@/services/products/product.service'
import ExploreClient from './ExploreClient'
import ExploreLoading from './loading'

async function ProductGrid() {
  const products = await listProducts();
  return <ExploreClient products={products} />;
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<ExploreLoading />}>
      <ProductGrid />
    </Suspense>
  );
}
