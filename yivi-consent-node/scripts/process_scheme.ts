import fs from 'fs'
import path from 'path';
import { XMLParser } from 'fast-xml-parser';

const getDirectories = (directory: string) => {
    return fs.readdirSync((directory), {
        withFileTypes: true
    })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
}
const SCHEME = "pbdf";
const issuers = getDirectories(path.join(process.cwd(), `../vendor/schemes/${SCHEME}`));
const parser = new XMLParser({
    ignoreAttributes: false
});

export interface Attribute {
    id: string;
    name: {
        en: string;
        nl: string;
    }
    description: {
        en: string;
        nl: string;
    }
};

let attributesMap: Record<string, Attribute> = {};

for (const issuer of issuers) {
    const credentials = getDirectories(path.join(process.cwd(), `../vendor/schemes/${SCHEME}`, issuer, 'Issues'));
    for (const credential of credentials) {
        const credentialDescription = fs.readFileSync(path.join(process.cwd(), `../vendor/schemes/${SCHEME}`, issuer, 'Issues', credential, 'description.xml'), 'utf-8');
        const parsedCredentials = parser.parse(credentialDescription);
        let attributes = parsedCredentials['IssueSpecification']['Attributes']['Attribute'];
        if (!Array.isArray(attributes)) {
            attributes = [attributes]
        }
        for (const attribute of attributes) {
            if (attribute['@_revocation']) continue;
            attributesMap[`${SCHEME}.${issuer}.${credential}.${attribute['@_id']}`] = {
                id: attribute['@_id'],
                name: {
                    en: attribute['Name']['en'],
                    nl: attribute['Name']['nl']
                },
                description: {
                    en: attribute['Description']['en'],
                    nl: attribute['Description']['nl']
                }
            } as Attribute;
        }
    }
}

let typeDoc: string = `
export interface Attribute {
    id: string;
    name: {
        en: string;
        nl: string;
    }
    description: {
        en: string;
        nl: string;
    }
};
export type AttributeKeys = `;
for(const k of Object.keys(attributesMap)) {
    typeDoc += `'${k}'`;
    if(k !== Object.keys(attributesMap).at(-1)) {
        typeDoc += ' | ';
    } else {
        typeDoc += ';\n';
    }
}

typeDoc += `export type Attributes = Record<AttributeKeys,Attribute>;
export const attributeMap: Attributes = `;
typeDoc += JSON.stringify(attributesMap, null, 2);
const outputPath = path.join(process.cwd(), './src/attributes.ts');
fs.writeFileSync(outputPath, typeDoc, {flag: 'w'});
console.log(`attributes.ts written to ${outputPath}`);


