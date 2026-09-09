import { getSupabase } from "../lib/supabase"

export default async function Home() {
  const supabase = getSupabase()

  const { data: products, error } = await supabase
    .from("products")
    .select("*")

  if (error) {
    return (
      <main>
        <h1>虚拟商品商城</h1>
        <p>商品加载失败：{error.message}</p>
      </main>
    )
  }

  return (
    <main>
      <h1>虚拟商品商城</h1>

      {products?.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>{product.description}</p>

          <p>
            价格：{product.price}
          </p>
        </div>
      ))}
    </main>
  )
}
