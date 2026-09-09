import { supabase } from "@/lib/supabase"


export default async function Home(){

  const { data: products } =
    await supabase
    .from("products")
    .select("*")


  return (

    <main>

      <h1>
        虚拟商品商城
      </h1>


      {
        products?.map(product => (

          <div key={product.id}>

            <h2>
              {product.name}
            </h2>

            <p>
              {product.description}
            </p>

            <p>
              价格：
              {product.price}
            </p>

          </div>

        ))
      }


    </main>

  )
}
