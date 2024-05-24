// @ts-ignore
import IrmaBackend from '@privacybydesign/irma-backend';
import { Configuration, OAuth2Api } from "@ory/client"

// const irmaBackend = new IrmaBackend("http://irma_server:8088", {serverToken: false, debugging: true})
const irmaBackend = new IrmaBackend("http://127.0.0.1:8088", {serverToken: false, debugging: true})

const configuration = new Configuration({
    basePath: process.env.HYDRA_ADMIN_URL,
  })
  
  const hydraAdmin = new OAuth2Api(configuration)

export {
    irmaBackend,
    hydraAdmin

};