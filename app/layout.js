export const metadata = {
  title: "虚拟商品商城",
  description: "Virtual Shop",
}


export default function RootLayout({
  children,
}) {

  return (

    <html lang="zh-CN">

      <body>

        {children}

      </body>

    </html>

  )

}
