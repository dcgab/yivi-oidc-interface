import { Configuration, ConfigurationParameters, FrontendApi } from '@ory/client'
const oryConfig = new Configuration({
    basePath: process.env.ORY_SDK_URL,
    // basePath: `${process.env.APP_URL}/.ory`,
    apiKey: process.env.ORY_API_KEY
})
// const ory: ProjectApi = new ProjectApi(oryConfig as Configuration)
const ory: FrontendApi = new FrontendApi(oryConfig)


export default ory