// @ts-ignore
import IrmaBackend from '@privacybydesign/irma-backend';

const irmaBackend = new IrmaBackend("http://irma_server:8088", {serverToken: false, debugging: true})

export {
    irmaBackend
};