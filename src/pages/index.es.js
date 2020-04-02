import React from "react"
import { Trans } from "@lingui/macro"
import { I18nProvider } from "@lingui/react"

import catalogES from "../locales/es/messages"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <I18nProvider
    language="es"
    catalogs={{
      es: catalogES,
    }}
  >
    <Layout>
      <SEO title="Home" />
      <h1>
        <Trans>Hi people</Trans>
      </h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  </I18nProvider>
)

export default IndexPage
