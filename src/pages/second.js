import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Meta from "../components/meta" //追加

export default () => (
  <Layout>
    <Meta
      title="2つ目のページ"
      desc="2ページ目です"
    />
    <div>
      <p>2つ目のページのメインコンテンツ！</p>
      <Link to={"/"}>トップページへのリンク</Link>
    </div>
  </Layout>
)