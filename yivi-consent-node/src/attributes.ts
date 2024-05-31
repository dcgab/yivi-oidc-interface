
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
export type AttributeKeys = 'pbdf.PubHubs.account.id' | 'pbdf.PubHubs.account.registrationDate' | 'pbdf.PubHubs.account.registrationSource' | 'pbdf.PubHubs.pubhubsaccount.email' | 'pbdf.PubHubs.pubhubsaccount.mobilenumber' | 'pbdf.PubHubs.pubhubsaccount.registrationdate' | 'pbdf.bzkpilot.address.street' | 'pbdf.bzkpilot.address.houseNumber' | 'pbdf.bzkpilot.address.zipcode' | 'pbdf.bzkpilot.address.city' | 'pbdf.bzkpilot.address.municipality' | 'pbdf.bzkpilot.personalData.fullname' | 'pbdf.bzkpilot.personalData.initials' | 'pbdf.bzkpilot.personalData.firstnames' | 'pbdf.bzkpilot.personalData.prefix' | 'pbdf.bzkpilot.personalData.familyname' | 'pbdf.bzkpilot.personalData.gender' | 'pbdf.bzkpilot.personalData.dateofbirth' | 'pbdf.bzkpilot.personalData.over12' | 'pbdf.bzkpilot.personalData.over16' | 'pbdf.bzkpilot.personalData.over18' | 'pbdf.bzkpilot.personalData.over21' | 'pbdf.bzkpilot.personalData.over65' | 'pbdf.bzkpilot.personalData.nationality' | 'pbdf.bzkpilot.personalData.countryofbirth' | 'pbdf.bzkpilot.personalData.bsn' | 'pbdf.bzkpilot.personalData.photo' | 'pbdf.chipsoft.bsn.bsn' | 'pbdf.chipsoft.bsn.initials' | 'pbdf.chipsoft.bsn.firstnames' | 'pbdf.chipsoft.bsn.prefix' | 'pbdf.chipsoft.bsn.familyname' | 'pbdf.chipsoft.bsn.dateofbirth' | 'pbdf.chipsoft.testbsn.bsn' | 'pbdf.chipsoft.testbsn.initials' | 'pbdf.chipsoft.testbsn.firstnames' | 'pbdf.chipsoft.testbsn.prefix' | 'pbdf.chipsoft.testbsn.familyname' | 'pbdf.chipsoft.testbsn.dateofbirth' | 'pbdf.cis.digitalInsurancePassport.initials' | 'pbdf.cis.digitalInsurancePassport.prefix' | 'pbdf.cis.digitalInsurancePassport.surname' | 'pbdf.cis.digitalInsurancePassport.gender' | 'pbdf.cis.digitalInsurancePassport.dateofbirth' | 'pbdf.cis.digitalInsurancePassport.countryofbirth' | 'pbdf.cis.digitalInsurancePassport.legalInsuranceChecks' | 'pbdf.cis.digitalInsurancePassport.assuranceLevel' | 'pbdf.gebiedonline.livingarea.zipcode' | 'pbdf.gebiedonline.livingarea.district' | 'pbdf.gebiedonline.livingarea.city' | 'pbdf.gebiedonline.useridentification.logincode' | 'pbdf.gebiedonline.workingarea.zipcode' | 'pbdf.gebiedonline.workingarea.district' | 'pbdf.gebiedonline.workingarea.city' | 'pbdf.gemeente.address.street' | 'pbdf.gemeente.address.houseNumber' | 'pbdf.gemeente.address.zipcode' | 'pbdf.gemeente.address.municipality' | 'pbdf.gemeente.address.city' | 'pbdf.gemeente.personalData.initials' | 'pbdf.gemeente.personalData.firstnames' | 'pbdf.gemeente.personalData.prefix' | 'pbdf.gemeente.personalData.familyname' | 'pbdf.gemeente.personalData.fullname' | 'pbdf.gemeente.personalData.gender' | 'pbdf.gemeente.personalData.nationality' | 'pbdf.gemeente.personalData.surname' | 'pbdf.gemeente.personalData.dateofbirth' | 'pbdf.gemeente.personalData.cityofbirth' | 'pbdf.gemeente.personalData.countryofbirth' | 'pbdf.gemeente.personalData.over12' | 'pbdf.gemeente.personalData.over16' | 'pbdf.gemeente.personalData.over18' | 'pbdf.gemeente.personalData.over21' | 'pbdf.gemeente.personalData.over65' | 'pbdf.gemeente.personalData.bsn' | 'pbdf.gemeente.personalData.digidlevel' | 'pbdf.ivido.login.identifier' | 'pbdf.minvws-cibg.pilot-2.initials' | 'pbdf.minvws-cibg.pilot-2.surnamePrefix' | 'pbdf.minvws-cibg.pilot-2.surname' | 'pbdf.minvws-cibg.pilot-2.entityName' | 'pbdf.minvws-cibg.pilot-2.ura' | 'pbdf.minvws-cibg.pilot-2.uziId' | 'pbdf.minvws-cibg.pilot-2.roles' | 'pbdf.minvws-cibg.pilot-2.loaAuthn' | 'pbdf.minvws-cibg.pilot-2.loaUzi' | 'pbdf.nijmegen.address.street' | 'pbdf.nijmegen.address.houseNumber' | 'pbdf.nijmegen.address.zipcode' | 'pbdf.nijmegen.address.municipality' | 'pbdf.nijmegen.address.city' | 'pbdf.nijmegen.ageLimits.over12' | 'pbdf.nijmegen.ageLimits.over16' | 'pbdf.nijmegen.ageLimits.over18' | 'pbdf.nijmegen.ageLimits.over21' | 'pbdf.nijmegen.ageLimits.over65' | 'pbdf.nijmegen.bsn.bsn' | 'pbdf.nijmegen.employeeData.email' | 'pbdf.nijmegen.employeeData.worksForGemeenteNijmegen' | 'pbdf.nijmegen.personalData.initials' | 'pbdf.nijmegen.personalData.firstnames' | 'pbdf.nijmegen.personalData.prefix' | 'pbdf.nijmegen.personalData.familyname' | 'pbdf.nijmegen.personalData.surname' | 'pbdf.nijmegen.personalData.fullname' | 'pbdf.nijmegen.personalData.dateofbirth' | 'pbdf.nijmegen.personalData.gender' | 'pbdf.nijmegen.personalData.nationality' | 'pbdf.nijmegen.travelDocument.kind' | 'pbdf.nijmegen.travelDocument.number' | 'pbdf.nijmegen.travelDocument.issuancedate' | 'pbdf.nijmegen.travelDocument.expirydate' | 'pbdf.nijmegen.travelDocument.documentissuer' | 'pbdf.nuts.agb.agbcode' | 'pbdf.pbdf.ageLimits.over12' | 'pbdf.pbdf.ageLimits.over16' | 'pbdf.pbdf.ageLimits.over18' | 'pbdf.pbdf.ageLimits.over21' | 'pbdf.pbdf.ageLimits.over65' | 'pbdf.pbdf.big.bignumber' | 'pbdf.pbdf.big.startdate' | 'pbdf.pbdf.big.profession' | 'pbdf.pbdf.big.specialism' | 'pbdf.pbdf.diploma.firstname' | 'pbdf.pbdf.diploma.prefix' | 'pbdf.pbdf.diploma.familyname' | 'pbdf.pbdf.diploma.dateofbirth' | 'pbdf.pbdf.diploma.gender' | 'pbdf.pbdf.diploma.education' | 'pbdf.pbdf.diploma.degree' | 'pbdf.pbdf.diploma.profile' | 'pbdf.pbdf.diploma.achieved' | 'pbdf.pbdf.diploma.institute' | 'pbdf.pbdf.diploma.city' | 'pbdf.pbdf.email.email' | 'pbdf.pbdf.email.domain' | 'pbdf.pbdf.facebook.fullname' | 'pbdf.pbdf.facebook.firstname' | 'pbdf.pbdf.facebook.familyname' | 'pbdf.pbdf.facebook.email' | 'pbdf.pbdf.facebook.dateofbirth' | 'pbdf.pbdf.ideal.fullname' | 'pbdf.pbdf.ideal.iban' | 'pbdf.pbdf.ideal.bic' | 'pbdf.pbdf.idin.initials' | 'pbdf.pbdf.idin.familyname' | 'pbdf.pbdf.idin.dateofbirth' | 'pbdf.pbdf.idin.gender' | 'pbdf.pbdf.idin.address' | 'pbdf.pbdf.idin.zipcode' | 'pbdf.pbdf.idin.city' | 'pbdf.pbdf.idin.country' | 'pbdf.pbdf.idin.over12' | 'pbdf.pbdf.idin.over16' | 'pbdf.pbdf.idin.over18' | 'pbdf.pbdf.idin.over21' | 'pbdf.pbdf.idin.over65' | 'pbdf.pbdf.irmatube.type' | 'pbdf.pbdf.irmatube.id' | 'pbdf.pbdf.irmatube.fullname' | 'pbdf.pbdf.linkedin.fullname' | 'pbdf.pbdf.linkedin.firstname' | 'pbdf.pbdf.linkedin.familyname' | 'pbdf.pbdf.linkedin.email' | 'pbdf.pbdf.linkedin.profileurl' | 'pbdf.pbdf.mijnirma.email' | 'pbdf.pbdf.mobilenumber.mobilenumber' | 'pbdf.pbdf.surfnet.institute' | 'pbdf.pbdf.surfnet.type' | 'pbdf.pbdf.surfnet.id' | 'pbdf.pbdf.surfnet.fullname' | 'pbdf.pbdf.surfnet.firstname' | 'pbdf.pbdf.surfnet.familyname' | 'pbdf.pbdf.surfnet.email' | 'pbdf.pbdf.surfnet-2.institute' | 'pbdf.pbdf.surfnet-2.type' | 'pbdf.pbdf.surfnet-2.id' | 'pbdf.pbdf.surfnet-2.fullid' | 'pbdf.pbdf.surfnet-2.fullname' | 'pbdf.pbdf.surfnet-2.firstname' | 'pbdf.pbdf.surfnet-2.familyname' | 'pbdf.pbdf.surfnet-2.email' | 'pbdf.pbdf.twitter.username' | 'pbdf.pbdf.twitter.fullname' | 'pbdf.pbdf.twitter.email' | 'pbdf.pbdf.twitter.profileurl' | 'pbdf.pilot-amsterdam.idcard.surname' | 'pbdf.pilot-amsterdam.idcard.firstnames' | 'pbdf.pilot-amsterdam.idcard.gender' | 'pbdf.pilot-amsterdam.idcard.dateofbirth' | 'pbdf.pilot-amsterdam.idcard.over12' | 'pbdf.pilot-amsterdam.idcard.over16' | 'pbdf.pilot-amsterdam.idcard.over18' | 'pbdf.pilot-amsterdam.idcard.over21' | 'pbdf.pilot-amsterdam.idcard.over65' | 'pbdf.pilot-amsterdam.idcard.nationality' | 'pbdf.pilot-amsterdam.idcard.personalnumber' | 'pbdf.pilot-amsterdam.idcard.assurancelevel' | 'pbdf.pilot-amsterdam.idcard.documentnumber' | 'pbdf.pilot-amsterdam.idcard.photo' | 'pbdf.pilot-amsterdam.passport.surname' | 'pbdf.pilot-amsterdam.passport.firstnames' | 'pbdf.pilot-amsterdam.passport.gender' | 'pbdf.pilot-amsterdam.passport.dateofbirth' | 'pbdf.pilot-amsterdam.passport.over12' | 'pbdf.pilot-amsterdam.passport.over16' | 'pbdf.pilot-amsterdam.passport.over18' | 'pbdf.pilot-amsterdam.passport.over21' | 'pbdf.pilot-amsterdam.passport.over65' | 'pbdf.pilot-amsterdam.passport.nationality' | 'pbdf.pilot-amsterdam.passport.personalnumber' | 'pbdf.pilot-amsterdam.passport.assurancelevel' | 'pbdf.pilot-amsterdam.passport.documentnumber' | 'pbdf.pilot-amsterdam.passport.photo' | 'pbdf.sidn-pbdf.email.email' | 'pbdf.sidn-pbdf.email.domain' | 'pbdf.sidn-pbdf.irma.pseudonym' | 'pbdf.sidn-pbdf.mobilenumber.mobilenumber' | 'pbdf.sidn-pbdf.uniqueid.uniqueid' | 'pbdf.sidn-pbdf.uniqueid.organization' | 'pbdf.signicat.authorization.kvkNumber' | 'pbdf.signicat.authorization.name' | 'pbdf.signicat.authorization.authorizationDescription' | 'pbdf.signicat.authorization.fullname' | 'pbdf.signicat.authorization.euid' | 'pbdf.signicat.authorization.rsin' | 'pbdf.signicat.authorization.tradeNames' | 'pbdf.signicat.authorization.legalEntity' | 'pbdf.signicat.authorization.address' | 'pbdf.signicat.authorization.sbiActivity' | 'pbdf.signicat.authorization.registrationStart' | 'pbdf.signicat.authorization.referenceMoment' | 'pbdf.signicat.authorization.authorizationCode' | 'pbdf.signicat.authorization.authorizationDate' | 'pbdf.signicat.authorization.issuedBy' | 'pbdf.signicat.authorization.lastName' | 'pbdf.signicat.authorization.prefix' | 'pbdf.signicat.authorization.firstNames' | 'pbdf.signicat.authorization.dateOfBirth' | 'pbdf.signicat.kvkTradeRegister.kvkNumber' | 'pbdf.signicat.kvkTradeRegister.rsin' | 'pbdf.signicat.kvkTradeRegister.name' | 'pbdf.signicat.kvkTradeRegister.tradeNames' | 'pbdf.signicat.kvkTradeRegister.typeOwner' | 'pbdf.signicat.kvkTradeRegister.legalEntity' | 'pbdf.signicat.kvkTradeRegister.address' | 'pbdf.signicat.kvkTradeRegister.emailAddress' | 'pbdf.signicat.kvkTradeRegister.phone' | 'pbdf.signicat.kvkTradeRegister.sbiActivity' | 'pbdf.signicat.kvkTradeRegister.registrationStart' | 'pbdf.signicat.kvkTradeRegister.dateDeregistration' | 'pbdf.signicat.kvkTradeRegister.registrationEnd' | 'pbdf.signicat.kvkTradeRegister.specialLegalSituation' | 'pbdf.signicat.kvkTradeRegister.restrictionInLegalAction' | 'pbdf.signicat.kvkTradeRegister.foreignLegalStatus' | 'pbdf.signicat.kvkTradeRegister.lastName' | 'pbdf.signicat.kvkTradeRegister.prefix' | 'pbdf.signicat.kvkTradeRegister.firstNames' | 'pbdf.signicat.kvkTradeRegister.dateOfBirth' | 'pbdf.signicat.kvkTradeRegister.dateOfDeath' | 'pbdf.signicat.kvkTradeRegister.fullname' | 'pbdf.signicat.kvkTradeRegister.typeOfficial' | 'pbdf.signicat.kvkTradeRegister.position' | 'pbdf.signicat.kvkTradeRegister.jobTitle' | 'pbdf.signicat.kvkTradeRegister.kindOfAuthorization' | 'pbdf.signicat.kvkTradeRegister.restrictionInEurosAuthorization' | 'pbdf.signicat.kvkTradeRegister.otherRestrictionAuthorization' | 'pbdf.signicat.kvkTradeRegister.isAuthorizedWithOtherPersons' | 'pbdf.signicat.kvkTradeRegister.typePowerOfAttorney' | 'pbdf.signicat.kvkTradeRegister.restrictioninMoneyPowerOfAttorney' | 'pbdf.signicat.kvkTradeRegister.restrictionOnActPowerOfAttorney' | 'pbdf.signicat.kvkTradeRegister.hasOtherPowerOfAttorney' | 'pbdf.signicat.kvkTradeRegister.descriptionOtherPowerOfAttorney' | 'pbdf.signicat.kvkTradeRegister.permissionToChangeTradeRegister' | 'pbdf.signicat.kvkTradeRegister.specialLegalSituationOfficial' | 'pbdf.signicat.kvkTradeRegister.restrictionInLegalActionOfficial' | 'pbdf.signicat.kvkTradeRegister.suspensionStart' | 'pbdf.signicat.kvkTradeRegister.suspensionEnd' | 'pbdf.signicat.kvkTradeRegister.emancipationOfMinor' | 'pbdf.signicat.kvkTradeRegister.hasRestriction' | 'pbdf.signicat.kvkTradeRegister.isAuthorized' | 'pbdf.signicat.kvkTradeRegister.reason' | 'pbdf.signicat.kvkTradeRegister.referenceMoment' | 'pbdf.surf.secureid.secureid' | 'pbdf.surf.secureid.environment' | 'pbdf.surf.surfdrive.eppn' | 'pbdf.surf.surfdrive.emailadres' | 'pbdf.surf.surfdrive.displayname' | 'pbdf.vgz.machtiging.clientnumber' | 'pbdf.vgz.machtiging.clientfullname' | 'pbdf.vgz.machtiging.mandateid';
export type Attributes = Record<AttributeKeys,Attribute>;
export const attributeMap: Attributes = {
  "pbdf.PubHubs.account.id": {
    "id": "id",
    "name": {
      "en": "Registration pseudonym",
      "nl": "Registratie pseudoniem"
    },
    "description": {
      "en": "Your unique PubHubs pseudonym",
      "nl": "Je unieke PubHubs pseudoniem"
    }
  },
  "pbdf.PubHubs.account.registrationDate": {
    "id": "registrationDate",
    "name": {
      "en": "Date of registration",
      "nl": "Datum van registratie"
    },
    "description": {
      "en": "Your original registration date at PubHubs",
      "nl": "Je oorspronkelijke registratiedatum bij PubHubs"
    }
  },
  "pbdf.PubHubs.account.registrationSource": {
    "id": "registrationSource",
    "name": {
      "en": "Method of registration",
      "nl": "Methode van registratie"
    },
    "description": {
      "en": "Your method of registration",
      "nl": "Je methode van registratie"
    }
  },
  "pbdf.PubHubs.pubhubsaccount.email": {
    "id": "email",
    "name": {
      "en": "Email address",
      "nl": "E-mailadres"
    },
    "description": {
      "en": "Your email address",
      "nl": "Je e-mailadres"
    }
  },
  "pbdf.PubHubs.pubhubsaccount.mobilenumber": {
    "id": "mobilenumber",
    "name": {
      "en": "Mobile phone number",
      "nl": "Mobiele telefoonnummer"
    },
    "description": {
      "en": "Your mobile phone number",
      "nl": "Je mobiel telefoonnummer"
    }
  },
  "pbdf.PubHubs.pubhubsaccount.registrationdate": {
    "id": "registrationdate",
    "name": {
      "en": "Registration date",
      "nl": "Registratiedatum"
    },
    "description": {
      "en": "Your registration date",
      "nl": "Jouw registratie datum"
    }
  },
  "pbdf.bzkpilot.address.street": {
    "id": "street",
    "name": {
      "en": "Street",
      "nl": "Straat"
    },
    "description": {
      "en": "Your street",
      "nl": "Je straat"
    }
  },
  "pbdf.bzkpilot.address.houseNumber": {
    "id": "houseNumber",
    "name": {
      "en": "House number",
      "nl": "Huisnummer"
    },
    "description": {
      "en": "Your house number, with possible extension",
      "nl": "Je huisnummer, met eventuele toevoeging"
    }
  },
  "pbdf.bzkpilot.address.zipcode": {
    "id": "zipcode",
    "name": {
      "en": "Postal code",
      "nl": "Postcode"
    },
    "description": {
      "en": "Your postal code",
      "nl": "Je postcode"
    }
  },
  "pbdf.bzkpilot.address.city": {
    "id": "city",
    "name": {
      "en": "City",
      "nl": "Woonplaats"
    },
    "description": {
      "en": "Your city of residence",
      "nl": "Je woonplaats"
    }
  },
  "pbdf.bzkpilot.address.municipality": {
    "id": "municipality",
    "name": {
      "en": "Municipality",
      "nl": "Gemeente"
    },
    "description": {
      "en": "Your municipality",
      "nl": "Je gemeente"
    }
  },
  "pbdf.bzkpilot.personalData.fullname": {
    "id": "fullname",
    "name": {
      "en": "Full name",
      "nl": "Volledige naam"
    },
    "description": {
      "en": "Your full family name: your family name or (a combination with) the name of your partner",
      "nl": "Je volledige achternaam: je geslachtsnaam of (een combinatie met) de naam van je partner"
    }
  },
  "pbdf.bzkpilot.personalData.initials": {
    "id": "initials",
    "name": {
      "en": "Initials",
      "nl": "Voorletters"
    },
    "description": {
      "en": "Your initials, abbreviating your first names",
      "nl": "Je voorletters, als afkorting van je voornamen"
    }
  },
  "pbdf.bzkpilot.personalData.firstnames": {
    "id": "firstnames",
    "name": {
      "en": "First names",
      "nl": "Voornamen"
    },
    "description": {
      "en": "Your first names",
      "nl": "Je voornamen"
    }
  },
  "pbdf.bzkpilot.personalData.prefix": {
    "id": "prefix",
    "name": {
      "en": "Prefix",
      "nl": "Voorvoegsel"
    },
    "description": {
      "en": "Prefix of your family name",
      "nl": "Voorvoegsel van je achternaam"
    }
  },
  "pbdf.bzkpilot.personalData.familyname": {
    "id": "familyname",
    "name": {
      "en": "Family name",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your family name, as given to you at birth",
      "nl": "Je achternaam, zoals bij je geboorte toegekend"
    }
  },
  "pbdf.bzkpilot.personalData.gender": {
    "id": "gender",
    "name": {
      "en": "Gender",
      "nl": "Geslacht"
    },
    "description": {
      "en": "Your gender",
      "nl": "Je geslacht"
    }
  },
  "pbdf.bzkpilot.personalData.dateofbirth": {
    "id": "dateofbirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Your date of birth",
      "nl": "Je geboortedatum"
    }
  },
  "pbdf.bzkpilot.personalData.over12": {
    "id": "over12",
    "name": {
      "en": "Over 12",
      "nl": "Ouder dan 12"
    },
    "description": {
      "en": "Whether you are over 12",
      "nl": "Of je ouder dan 12 bent"
    }
  },
  "pbdf.bzkpilot.personalData.over16": {
    "id": "over16",
    "name": {
      "en": "Over 16",
      "nl": "Ouder dan 16"
    },
    "description": {
      "en": "Whether you are over 16",
      "nl": "Of je ouder dan 16 bent"
    }
  },
  "pbdf.bzkpilot.personalData.over18": {
    "id": "over18",
    "name": {
      "en": "Over 18",
      "nl": "Ouder dan 18"
    },
    "description": {
      "en": "Whether you are over 18",
      "nl": "Of je ouder dan 18 bent"
    }
  },
  "pbdf.bzkpilot.personalData.over21": {
    "id": "over21",
    "name": {
      "en": "Over 21",
      "nl": "Ouder dan 21"
    },
    "description": {
      "en": "Whether you are over 21",
      "nl": "Of je ouder dan 21 bent"
    }
  },
  "pbdf.bzkpilot.personalData.over65": {
    "id": "over65",
    "name": {
      "en": "Over 65",
      "nl": "Ouder dan 65"
    },
    "description": {
      "en": "Whether you are over 65",
      "nl": "Of je ouder dan 65 bent"
    }
  },
  "pbdf.bzkpilot.personalData.nationality": {
    "id": "nationality",
    "name": {
      "en": "Dutch nationality",
      "nl": "Nederlandse nationaliteit"
    },
    "description": {
      "en": "Whether you have the dutch nationality",
      "nl": "Of je de Nederlandse nationaliteit bezit"
    }
  },
  "pbdf.bzkpilot.personalData.countryofbirth": {
    "id": "countryofbirth",
    "name": {
      "en": "Country of birth",
      "nl": "Geboorteland"
    },
    "description": {
      "en": "Your country of birth",
      "nl": "Je geboorteland"
    }
  },
  "pbdf.bzkpilot.personalData.bsn": {
    "id": "bsn",
    "name": {
      "en": "BSN",
      "nl": "BSN"
    },
    "description": {
      "en": "Your Dutch Citizen registration number (BSN)",
      "nl": "Je Burgerservicenummer (BSN)"
    }
  },
  "pbdf.bzkpilot.personalData.photo": {
    "id": "photo",
    "name": {
      "en": "Photo",
      "nl": "Foto"
    },
    "description": {
      "en": "Your picture",
      "nl": "Je foto"
    }
  },
  "pbdf.chipsoft.bsn.bsn": {
    "id": "bsn",
    "name": {
      "en": "BSN from healthcare",
      "nl": "BSN vanuit de zorg"
    },
    "description": {
      "en": "Your Dutch Citizen service number (BSN) from healthcare",
      "nl": "Je Burgerservicenummer (BSN) vanuit de zorg"
    }
  },
  "pbdf.chipsoft.bsn.initials": {
    "id": "initials",
    "name": {
      "en": "Initials",
      "nl": "Voorletters"
    },
    "description": {
      "en": "Your initials, abbreviating your first names",
      "nl": "Je voorletters, een afkorting van je voornamen"
    }
  },
  "pbdf.chipsoft.bsn.firstnames": {
    "id": "firstnames",
    "name": {
      "en": "First names",
      "nl": "Voornamen"
    },
    "description": {
      "en": "Your first names",
      "nl": "Je voornamen"
    }
  },
  "pbdf.chipsoft.bsn.prefix": {
    "id": "prefix",
    "name": {
      "en": "Prefix",
      "nl": "Voorvoegsel"
    },
    "description": {
      "en": "Prefix of your family name",
      "nl": "Voorvoegsel van je achternaam"
    }
  },
  "pbdf.chipsoft.bsn.familyname": {
    "id": "familyname",
    "name": {
      "en": "Family name",
      "nl": "Geslachtsnaam"
    },
    "description": {
      "en": "Your family name, as given to you at birth",
      "nl": "Je achternaam, zoals aan je toegekend bij je geboorte"
    }
  },
  "pbdf.chipsoft.bsn.dateofbirth": {
    "id": "dateofbirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Your date of birth",
      "nl": "Je geboortedatum"
    }
  },
  "pbdf.chipsoft.testbsn.bsn": {
    "id": "bsn",
    "name": {
      "en": "Test BSN from healthcare",
      "nl": "Test BSN vanuit de zorg"
    },
    "description": {
      "en": "Test BSN from healthcare",
      "nl": "Test BSN vanuit de zorg"
    }
  },
  "pbdf.chipsoft.testbsn.initials": {
    "id": "initials",
    "name": {
      "en": "Initials",
      "nl": "Voorletters"
    },
    "description": {
      "en": "Your initials, abbreviating your first names",
      "nl": "Je voorletters, een afkorting van je voornamen"
    }
  },
  "pbdf.chipsoft.testbsn.firstnames": {
    "id": "firstnames",
    "name": {
      "en": "First names",
      "nl": "Voornamen"
    },
    "description": {
      "en": "Your first names",
      "nl": "Je voornamen"
    }
  },
  "pbdf.chipsoft.testbsn.prefix": {
    "id": "prefix",
    "name": {
      "en": "Prefix",
      "nl": "Voorvoegsel"
    },
    "description": {
      "en": "Prefix of your family name",
      "nl": "Voorvoegsel van je achternaam"
    }
  },
  "pbdf.chipsoft.testbsn.familyname": {
    "id": "familyname",
    "name": {
      "en": "Family name",
      "nl": "Geslachtsnaam"
    },
    "description": {
      "en": "Your family name, as given to you at birth",
      "nl": "Je achternaam, zoals aan je toegekend bij je geboorte"
    }
  },
  "pbdf.chipsoft.testbsn.dateofbirth": {
    "id": "dateofbirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Your date of birth",
      "nl": "Je geboortedatum"
    }
  },
  "pbdf.cis.digitalInsurancePassport.initials": {
    "id": "initials",
    "name": {
      "en": "Initials",
      "nl": "Voorletters"
    },
    "description": {
      "en": "Your initials, abbreviating your first names",
      "nl": "Je voorletters, als afkorting van je voornamen"
    }
  },
  "pbdf.cis.digitalInsurancePassport.prefix": {
    "id": "prefix",
    "name": {
      "en": "Prefix",
      "nl": "Voorvoegsel"
    },
    "description": {
      "en": "Prefix of your family name",
      "nl": "Voorvoegsel van je achternaam"
    }
  },
  "pbdf.cis.digitalInsurancePassport.surname": {
    "id": "surname",
    "name": {
      "en": "Surname",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your full family name: your family name or (a combination with) that of your partner",
      "nl": "Je volledige achternaam: je geslachtsnaam of (een combinatie met) die van je partner"
    }
  },
  "pbdf.cis.digitalInsurancePassport.gender": {
    "id": "gender",
    "name": {
      "en": "Gender",
      "nl": "Geslacht"
    },
    "description": {
      "en": "Your gender",
      "nl": "Je geslacht"
    }
  },
  "pbdf.cis.digitalInsurancePassport.dateofbirth": {
    "id": "dateofbirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Your date of birth",
      "nl": "Je geboortedatum"
    }
  },
  "pbdf.cis.digitalInsurancePassport.countryofbirth": {
    "id": "countryofbirth",
    "name": {
      "en": "Country of birth",
      "nl": "Geboorteland"
    },
    "description": {
      "en": "Your country of birth",
      "nl": "Je geboorteland"
    }
  },
  "pbdf.cis.digitalInsurancePassport.legalInsuranceChecks": {
    "id": "legalInsuranceChecks",
    "name": {
      "en": "Legal Insurance Checks",
      "nl": "Wettelijke Controles Verzekeringen"
    },
    "description": {
      "en": "No hits",
      "nl": "Geen signaleringen"
    }
  },
  "pbdf.cis.digitalInsurancePassport.assuranceLevel": {
    "id": "assuranceLevel",
    "name": {
      "en": "Assurance level",
      "nl": "Betrouwbaarheidsniveau"
    },
    "description": {
      "en": "The assurance level with which your identity was verified",
      "nl": "Het betrouwbaarheidsniveau waarmee je identiteit was vastgesteld"
    }
  },
  "pbdf.gebiedonline.livingarea.zipcode": {
    "id": "zipcode",
    "name": {
      "en": "Zip code in 4 digits",
      "nl": "Postcode in 4 cijfers"
    },
    "description": {
      "en": "Zip code (4 digits) of the area where I live",
      "nl": "Postcode (4 cijfers) van het gebied waar ik woon"
    }
  },
  "pbdf.gebiedonline.livingarea.district": {
    "id": "district",
    "name": {
      "en": "District",
      "nl": "Wijk"
    },
    "description": {
      "en": "The district where I live",
      "nl": "De wijk waar ik woon"
    }
  },
  "pbdf.gebiedonline.livingarea.city": {
    "id": "city",
    "name": {
      "en": "City",
      "nl": "Plaats"
    },
    "description": {
      "en": "The city where I live",
      "nl": "De plaats waar ik woon"
    }
  },
  "pbdf.gebiedonline.useridentification.logincode": {
    "id": "logincode",
    "name": {
      "en": "Login code",
      "nl": "Logincode"
    },
    "description": {
      "en": "My personal code to get access to my user account",
      "nl": "Mijn persoonlijke code om toegang te krijgen tot mijn gebruikersaccount"
    }
  },
  "pbdf.gebiedonline.workingarea.zipcode": {
    "id": "zipcode",
    "name": {
      "en": "Zip code in 4 digits",
      "nl": "Postcode in 4 cijfers"
    },
    "description": {
      "en": "Zip code (4 digits) of the area(s) where I work",
      "nl": "Postcode (4 cijfers) van de gebied(en) waar ik werk"
    }
  },
  "pbdf.gebiedonline.workingarea.district": {
    "id": "district",
    "name": {
      "en": "District",
      "nl": "Wijk"
    },
    "description": {
      "en": "The district(s) where I work",
      "nl": "De wijk(en) waar ik werk"
    }
  },
  "pbdf.gebiedonline.workingarea.city": {
    "id": "city",
    "name": {
      "en": "City",
      "nl": "Plaats"
    },
    "description": {
      "en": "The city/cities where I work",
      "nl": "De plaats(en) waar ik werk"
    }
  },
  "pbdf.gemeente.address.street": {
    "id": "street",
    "name": {
      "en": "Street",
      "nl": "Straat"
    },
    "description": {
      "en": "Your street",
      "nl": "Je straat"
    }
  },
  "pbdf.gemeente.address.houseNumber": {
    "id": "houseNumber",
    "name": {
      "en": "House number",
      "nl": "Huisnummer"
    },
    "description": {
      "en": "Your house number, with possible extension",
      "nl": "Je huisnummer, met eventuele toevoeging"
    }
  },
  "pbdf.gemeente.address.zipcode": {
    "id": "zipcode",
    "name": {
      "en": "Postal code",
      "nl": "Postcode"
    },
    "description": {
      "en": "Your postal code",
      "nl": "Je postcode"
    }
  },
  "pbdf.gemeente.address.municipality": {
    "id": "municipality",
    "name": {
      "en": "Municipality",
      "nl": "Gemeente"
    },
    "description": {
      "en": "Your municipality",
      "nl": "Je gemeente"
    }
  },
  "pbdf.gemeente.address.city": {
    "id": "city",
    "name": {
      "en": "City",
      "nl": "Woonplaats"
    },
    "description": {
      "en": "Your city of residence",
      "nl": "Je woonplaats"
    }
  },
  "pbdf.gemeente.personalData.initials": {
    "id": "initials",
    "name": {
      "en": "Initials",
      "nl": "Voorletters"
    },
    "description": {
      "en": "Your initials, abbreviating your first names",
      "nl": "Je voorletters, als afkorting van je voornamen"
    }
  },
  "pbdf.gemeente.personalData.firstnames": {
    "id": "firstnames",
    "name": {
      "en": "First names",
      "nl": "Voornamen"
    },
    "description": {
      "en": "Your first names",
      "nl": "Je voornamen"
    }
  },
  "pbdf.gemeente.personalData.prefix": {
    "id": "prefix",
    "name": {
      "en": "Prefix",
      "nl": "Voorvoegsel"
    },
    "description": {
      "en": "Prefix of your family name",
      "nl": "Voorvoegsel van je achternaam"
    }
  },
  "pbdf.gemeente.personalData.familyname": {
    "id": "familyname",
    "name": {
      "en": "Family name",
      "nl": "Geslachtsnaam"
    },
    "description": {
      "en": "Your family name, as given to you at birth",
      "nl": "Je achternaam, zoals bij je geboorte toegekend"
    }
  },
  "pbdf.gemeente.personalData.fullname": {
    "id": "fullname",
    "name": {
      "en": "Full name",
      "nl": "Volledige naam"
    },
    "description": {
      "en": "Your full name",
      "nl": "Je volledige naam"
    }
  },
  "pbdf.gemeente.personalData.gender": {
    "id": "gender",
    "name": {
      "en": "Gender",
      "nl": "Geslacht"
    },
    "description": {
      "en": "Your gender",
      "nl": "Je geslacht"
    }
  },
  "pbdf.gemeente.personalData.nationality": {
    "id": "nationality",
    "name": {
      "en": "Dutch nationality",
      "nl": "Nederlandse nationaliteit"
    },
    "description": {
      "en": "Whether you have the dutch nationality",
      "nl": "Of je de Nederlandse nationaliteit bezit"
    }
  },
  "pbdf.gemeente.personalData.surname": {
    "id": "surname",
    "name": {
      "en": "Surname",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your full family name: your family name or (a combination with) the name of your partner",
      "nl": "Je volledige achternaam: je geslachtsnaam of (een combinatie met) de naam van je partner"
    }
  },
  "pbdf.gemeente.personalData.dateofbirth": {
    "id": "dateofbirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Your date of birth",
      "nl": "Je geboortedatum"
    }
  },
  "pbdf.gemeente.personalData.cityofbirth": {
    "id": "cityofbirth",
    "name": {
      "en": "City of birth",
      "nl": "Geboorteplaats"
    },
    "description": {
      "en": "Your city of birth",
      "nl": "Je geboorteplaats"
    }
  },
  "pbdf.gemeente.personalData.countryofbirth": {
    "id": "countryofbirth",
    "name": {
      "en": "Country of birth",
      "nl": "Geboorteland"
    },
    "description": {
      "en": "Your country of birth",
      "nl": "Je geboorteland"
    }
  },
  "pbdf.gemeente.personalData.over12": {
    "id": "over12",
    "name": {
      "en": "Over 12",
      "nl": "Ouder dan 12"
    },
    "description": {
      "en": "Whether you are over 12",
      "nl": "Of je ouder dan 12 bent"
    }
  },
  "pbdf.gemeente.personalData.over16": {
    "id": "over16",
    "name": {
      "en": "Over 16",
      "nl": "Ouder dan 16"
    },
    "description": {
      "en": "Whether you are over 16",
      "nl": "Of je ouder dan 16 bent"
    }
  },
  "pbdf.gemeente.personalData.over18": {
    "id": "over18",
    "name": {
      "en": "Over 18",
      "nl": "Ouder dan 18"
    },
    "description": {
      "en": "Whether you are over 18",
      "nl": "Of je ouder dan 18 bent"
    }
  },
  "pbdf.gemeente.personalData.over21": {
    "id": "over21",
    "name": {
      "en": "Over 21",
      "nl": "Ouder dan 21"
    },
    "description": {
      "en": "Whether you are over 21",
      "nl": "Of je ouder dan 21 bent"
    }
  },
  "pbdf.gemeente.personalData.over65": {
    "id": "over65",
    "name": {
      "en": "Over 65",
      "nl": "Ouder dan 65"
    },
    "description": {
      "en": "Whether you are over 65",
      "nl": "Of je ouder dan 65 bent"
    }
  },
  "pbdf.gemeente.personalData.bsn": {
    "id": "bsn",
    "name": {
      "en": "BSN",
      "nl": "BSN"
    },
    "description": {
      "en": "Your Dutch Citizen service number (BSN)",
      "nl": "Je Burgerservicenummer (BSN)"
    }
  },
  "pbdf.gemeente.personalData.digidlevel": {
    "id": "digidlevel",
    "name": {
      "en": "Assurance level",
      "nl": "Betrouwbaarheidsniveau"
    },
    "description": {
      "en": "The assurance level with which your identity was verified",
      "nl": "Het betrouwbaarheidsniveau waarmee je identiteit is vastgesteld"
    }
  },
  "pbdf.ivido.login.identifier": {
    "id": "identifier",
    "name": {
      "en": "Identifier",
      "nl": "Identificatiecode"
    },
    "description": {
      "en": "Unique identifier for Ivido",
      "nl": "Unieke identificatiecode voor Ivido"
    }
  },
  "pbdf.minvws-cibg.pilot-2.initials": {
    "id": "initials",
    "name": {
      "en": "Initials",
      "nl": "Initialen"
    },
    "description": {
      "en": "Your initials",
      "nl": "Uw initialen"
    }
  },
  "pbdf.minvws-cibg.pilot-2.surnamePrefix": {
    "id": "surnamePrefix",
    "name": {
      "en": "Surname prefix(es)",
      "nl": "Tussenvoegsel(s)"
    },
    "description": {
      "en": "Your surname prefix(es)",
      "nl": "Tussenvoegsel(s) bij uw achternaam"
    }
  },
  "pbdf.minvws-cibg.pilot-2.surname": {
    "id": "surname",
    "name": {
      "en": "Surname",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your surname",
      "nl": "Uw achternaam"
    }
  },
  "pbdf.minvws-cibg.pilot-2.entityName": {
    "id": "entityName",
    "name": {
      "en": "Name of healthcare provider",
      "nl": "Naam zorgaanbieder"
    },
    "description": {
      "en": "The name of the healthcare provider",
      "nl": "De naam van de zorgaanbieder"
    }
  },
  "pbdf.minvws-cibg.pilot-2.ura": {
    "id": "ura",
    "name": {
      "en": "URA number",
      "nl": "URA-nummer"
    },
    "description": {
      "en": "The URA number of a healthcare provider",
      "nl": "Het URA-nummer van een zorgaanbieder"
    }
  },
  "pbdf.minvws-cibg.pilot-2.uziId": {
    "id": "uziId",
    "name": {
      "en": "UZI number",
      "nl": "UZI-nummer"
    },
    "description": {
      "en": "Your UZI number",
      "nl": "Uw UZI-nummer"
    }
  },
  "pbdf.minvws-cibg.pilot-2.roles": {
    "id": "roles",
    "name": {
      "en": "Roles",
      "nl": "Rollen"
    },
    "description": {
      "en": "Your roles at a healthcare organisation as defined in the UZI register",
      "nl": "Uw rollen bij een zorgaanbieder zoals geregistreerd in het UZI-register"
    }
  },
  "pbdf.minvws-cibg.pilot-2.loaAuthn": {
    "id": "loaAuthn",
    "name": {
      "en": "Authentication assurance level",
      "nl": "Betrouwbaarheidsniveau authenticatie"
    },
    "description": {
      "en": "Level of authenticatie assurance",
      "nl": "Betrouwbaarheidsniveau authenticatie"
    }
  },
  "pbdf.minvws-cibg.pilot-2.loaUzi": {
    "id": "loaUzi",
    "name": {
      "en": "UZI assurance level",
      "nl": "UZI-betrouwbaarheidsniveau"
    },
    "description": {
      "en": "Level of assurance of UZI identity",
      "nl": "Betrouwbaarheidsniveau van UZI-identiteit"
    }
  },
  "pbdf.nijmegen.address.street": {
    "id": "street",
    "name": {
      "en": "Street",
      "nl": "Straat"
    },
    "description": {
      "en": "Your street",
      "nl": "Je straat"
    }
  },
  "pbdf.nijmegen.address.houseNumber": {
    "id": "houseNumber",
    "name": {
      "en": "House number",
      "nl": "Huisnummer"
    },
    "description": {
      "en": "Your house number, letter and/or addition",
      "nl": "Je huisnummer, letter en/of toevoeging"
    }
  },
  "pbdf.nijmegen.address.zipcode": {
    "id": "zipcode",
    "name": {
      "en": "Zip code",
      "nl": "Postcode"
    },
    "description": {
      "en": "Your zip code",
      "nl": "Je postcode"
    }
  },
  "pbdf.nijmegen.address.municipality": {
    "id": "municipality",
    "name": {
      "en": "Municipality",
      "nl": "Gemeente"
    },
    "description": {
      "en": "Your municipality",
      "nl": "Je gemeente"
    }
  },
  "pbdf.nijmegen.address.city": {
    "id": "city",
    "name": {
      "en": "City",
      "nl": "Woonplaats"
    },
    "description": {
      "en": "Your city of residence",
      "nl": "Je woonplaats"
    }
  },
  "pbdf.nijmegen.ageLimits.over12": {
    "id": "over12",
    "name": {
      "en": "Over 12",
      "nl": "Ouder dan 12"
    },
    "description": {
      "en": "Whether you are over 12",
      "nl": "Of je ouder dan 12 bent"
    }
  },
  "pbdf.nijmegen.ageLimits.over16": {
    "id": "over16",
    "name": {
      "en": "Over 16",
      "nl": "Ouder dan 16"
    },
    "description": {
      "en": "Whether you are over 16",
      "nl": "Of je ouder dan 16 bent"
    }
  },
  "pbdf.nijmegen.ageLimits.over18": {
    "id": "over18",
    "name": {
      "en": "Over 18",
      "nl": "Ouder dan 18"
    },
    "description": {
      "en": "Whether you are over 18",
      "nl": "Of je ouder dan 18 bent"
    }
  },
  "pbdf.nijmegen.ageLimits.over21": {
    "id": "over21",
    "name": {
      "en": "Over 21",
      "nl": "Ouder dan 21"
    },
    "description": {
      "en": "Whether you are over 21",
      "nl": "Of je ouder dan 21 bent"
    }
  },
  "pbdf.nijmegen.ageLimits.over65": {
    "id": "over65",
    "name": {
      "en": "Over 65",
      "nl": "Ouder dan 65"
    },
    "description": {
      "en": "Whether you are over 65",
      "nl": "Of je ouder dan 65 bent"
    }
  },
  "pbdf.nijmegen.bsn.bsn": {
    "id": "bsn",
    "name": {
      "en": "BSN",
      "nl": "BSN"
    },
    "description": {
      "en": "Your Dutch Citizen service number (BSN)",
      "nl": "Je Burgerservicenummer (BSN)"
    }
  },
  "pbdf.nijmegen.employeeData.email": {
    "id": "email",
    "name": {
      "en": "Email address",
      "nl": "E-mailadres"
    },
    "description": {
      "en": "Your Gemeente Nijmegen email address",
      "nl": "Uw Gemeente Nijmegen e-mailadres"
    }
  },
  "pbdf.nijmegen.employeeData.worksForGemeenteNijmegen": {
    "id": "worksForGemeenteNijmegen",
    "name": {
      "en": "Works for Gemeente Nijmegen",
      "nl": "Werkt voor Gemeente Nijmegen"
    },
    "description": {
      "en": "Works for Gemeente Nijmegen",
      "nl": "Werkt voor Gemeente Nijmegen"
    }
  },
  "pbdf.nijmegen.personalData.initials": {
    "id": "initials",
    "name": {
      "en": "Initials",
      "nl": "Voorletters"
    },
    "description": {
      "en": "Your initials, abbreviating your first names",
      "nl": "Je voorletters, een afkorting van je voornamen"
    }
  },
  "pbdf.nijmegen.personalData.firstnames": {
    "id": "firstnames",
    "name": {
      "en": "First names",
      "nl": "Voornamen"
    },
    "description": {
      "en": "Your first names",
      "nl": "Je voornamen"
    }
  },
  "pbdf.nijmegen.personalData.prefix": {
    "id": "prefix",
    "name": {
      "en": "Prefix",
      "nl": "Voorvoegsel"
    },
    "description": {
      "en": "Prefix of your family name",
      "nl": "Voorvoegsel van je achternaam"
    }
  },
  "pbdf.nijmegen.personalData.familyname": {
    "id": "familyname",
    "name": {
      "en": "Family name",
      "nl": "Geslachtsnaam"
    },
    "description": {
      "en": "Your family name, as given to you at birth",
      "nl": "Je achternaam, zoals aan je toegekend bij je geboorte"
    }
  },
  "pbdf.nijmegen.personalData.surname": {
    "id": "surname",
    "name": {
      "en": "Surname",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your full family name: your family name or (a combination with) that of your partner",
      "nl": "Je volledige achternaam: je geslachtsnaam of (een combinatie met) die van je partner"
    }
  },
  "pbdf.nijmegen.personalData.fullname": {
    "id": "fullname",
    "name": {
      "en": "Full name",
      "nl": "Volledige naam"
    },
    "description": {
      "en": "Your full name",
      "nl": "Je volledige naam"
    }
  },
  "pbdf.nijmegen.personalData.dateofbirth": {
    "id": "dateofbirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Your date of birth",
      "nl": "Je geboortedatum"
    }
  },
  "pbdf.nijmegen.personalData.gender": {
    "id": "gender",
    "name": {
      "en": "Gender",
      "nl": "Geslacht"
    },
    "description": {
      "en": "Your gender",
      "nl": "Je geslacht"
    }
  },
  "pbdf.nijmegen.personalData.nationality": {
    "id": "nationality",
    "name": {
      "en": "Dutch nationality",
      "nl": "Nederlandse nationaliteit"
    },
    "description": {
      "en": "Whether you have the dutch nationality",
      "nl": "Of je de Nederlandse nationaliteit bezit"
    }
  },
  "pbdf.nijmegen.travelDocument.kind": {
    "id": "kind",
    "name": {
      "en": "Document kind",
      "nl": "Soort document"
    },
    "description": {
      "en": "The document kind (passport or identity card)",
      "nl": "Het soort reisdocument (paspoort of identiteitskaart)"
    }
  },
  "pbdf.nijmegen.travelDocument.number": {
    "id": "number",
    "name": {
      "en": "Document number",
      "nl": "Documentnummer"
    },
    "description": {
      "en": "The travel document number",
      "nl": "Het documentnummer"
    }
  },
  "pbdf.nijmegen.travelDocument.issuancedate": {
    "id": "issuancedate",
    "name": {
      "en": "Issuance date",
      "nl": "Datum uitgifte"
    },
    "description": {
      "en": "Date of issuance of the travel document",
      "nl": "Datum van uitgifte van het reisdocument"
    }
  },
  "pbdf.nijmegen.travelDocument.expirydate": {
    "id": "expirydate",
    "name": {
      "en": "Expiry date",
      "nl": "Verloopdatum"
    },
    "description": {
      "en": "Expiry date of the travel document",
      "nl": "Verloopdatum van het reisdocument"
    }
  },
  "pbdf.nijmegen.travelDocument.documentissuer": {
    "id": "documentissuer",
    "name": {
      "en": "Document issuer",
      "nl": "Uitgever"
    },
    "description": {
      "en": "Issuer of the travel document",
      "nl": "Autoriteit van afgifte reisdocument"
    }
  },
  "pbdf.nuts.agb.agbcode": {
    "id": "agbcode",
    "name": {
      "en": "AGB-code",
      "nl": "AGB-code"
    },
    "description": {
      "en": "Uniquely identifying code for individual healthcare professional",
      "nl": "Uniek identificerende code van individuele zorgverleners"
    }
  },
  "pbdf.pbdf.ageLimits.over12": {
    "id": "over12",
    "name": {
      "en": "Over 12",
      "nl": "Ouder dan 12"
    },
    "description": {
      "en": "Whether you are over 12",
      "nl": "Of je ouder dan 12 bent"
    }
  },
  "pbdf.pbdf.ageLimits.over16": {
    "id": "over16",
    "name": {
      "en": "Over 16",
      "nl": "Ouder dan 16"
    },
    "description": {
      "en": "Whether you are over 16",
      "nl": "Of je ouder dan 16 bent"
    }
  },
  "pbdf.pbdf.ageLimits.over18": {
    "id": "over18",
    "name": {
      "en": "Over 18",
      "nl": "Ouder dan 18"
    },
    "description": {
      "en": "Whether you are over 18",
      "nl": "Of je ouder dan 18 bent"
    }
  },
  "pbdf.pbdf.ageLimits.over21": {
    "id": "over21",
    "name": {
      "en": "Over 21",
      "nl": "Ouder dan 21"
    },
    "description": {
      "en": "Whether you are over 21",
      "nl": "Of je ouder dan 21 bent"
    }
  },
  "pbdf.pbdf.ageLimits.over65": {
    "id": "over65",
    "name": {
      "en": "Over 65",
      "nl": "Ouder dan 65"
    },
    "description": {
      "en": "Whether you are over 65",
      "nl": "Of je ouder dan 65 bent"
    }
  },
  "pbdf.pbdf.big.bignumber": {
    "id": "bignumber",
    "name": {
      "en": "BIG number",
      "nl": "BIG nummer"
    },
    "description": {
      "en": "Your BIG code",
      "nl": "Je BIG-nummer"
    }
  },
  "pbdf.pbdf.big.startdate": {
    "id": "startdate",
    "name": {
      "en": "Start date",
      "nl": "Startdatum"
    },
    "description": {
      "en": "Start date of this registration",
      "nl": "Startdatum van je registratie"
    }
  },
  "pbdf.pbdf.big.profession": {
    "id": "profession",
    "name": {
      "en": "Profession",
      "nl": "Beroep"
    },
    "description": {
      "en": "The profession you have",
      "nl": "Je beroep"
    }
  },
  "pbdf.pbdf.big.specialism": {
    "id": "specialism",
    "name": {
      "en": "Specialism",
      "nl": "Specialisme"
    },
    "description": {
      "en": "The specialty you have as part of your profession",
      "nl": "De specialisatie binnen je beroep"
    }
  },
  "pbdf.pbdf.diploma.firstname": {
    "id": "firstname",
    "name": {
      "en": "First name",
      "nl": "Voornaam"
    },
    "description": {
      "en": "Your first name from your diploma",
      "nl": "Je voornaam uit je diploma"
    }
  },
  "pbdf.pbdf.diploma.prefix": {
    "id": "prefix",
    "name": {
      "en": "Prefix",
      "nl": "Tussenvoegsel"
    },
    "description": {
      "en": "Your family name prefix from your diploma",
      "nl": "Je tussenvoegsel uit je diploma"
    }
  },
  "pbdf.pbdf.diploma.familyname": {
    "id": "familyname",
    "name": {
      "en": "Family name",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your family name from your diploma",
      "nl": "Je achternaam uit je diploma"
    }
  },
  "pbdf.pbdf.diploma.dateofbirth": {
    "id": "dateofbirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Your date of birth from your diploma",
      "nl": "Je geboortedatum uit je diploma"
    }
  },
  "pbdf.pbdf.diploma.gender": {
    "id": "gender",
    "name": {
      "en": "Gender",
      "nl": "Geslacht"
    },
    "description": {
      "en": "Your gender from your diploma",
      "nl": "Je geslacht uit je diploma"
    }
  },
  "pbdf.pbdf.diploma.education": {
    "id": "education",
    "name": {
      "en": "Education",
      "nl": "Opleiding"
    },
    "description": {
      "en": "Completed education",
      "nl": "Voltooide opleiding"
    }
  },
  "pbdf.pbdf.diploma.degree": {
    "id": "degree",
    "name": {
      "en": "Degree",
      "nl": "Opleiding"
    },
    "description": {
      "en": "Type of education",
      "nl": "Soort opleiding"
    }
  },
  "pbdf.pbdf.diploma.profile": {
    "id": "profile",
    "name": {
      "en": "Profile",
      "nl": "Profiel"
    },
    "description": {
      "en": "Education profile",
      "nl": "Opleidingsprofiel"
    }
  },
  "pbdf.pbdf.diploma.achieved": {
    "id": "achieved",
    "name": {
      "en": "Achieved in",
      "nl": "Behaald in"
    },
    "description": {
      "en": "Month of achieving this diploma",
      "nl": "Maand waarin dit diploma behaald is"
    }
  },
  "pbdf.pbdf.diploma.institute": {
    "id": "institute",
    "name": {
      "en": "Institute",
      "nl": "Instituut"
    },
    "description": {
      "en": "The institute where this degree has been achieved",
      "nl": "De instantie waar dit diploma behaald is"
    }
  },
  "pbdf.pbdf.diploma.city": {
    "id": "city",
    "name": {
      "en": "City",
      "nl": "Stad"
    },
    "description": {
      "en": "The city of the institute where this degree has been achieved",
      "nl": "De stad van de instantie waar dit diploma behaald is"
    }
  },
  "pbdf.pbdf.email.email": {
    "id": "email",
    "name": {
      "en": "Email address",
      "nl": "E-mailadres"
    },
    "description": {
      "en": "Your verified email address",
      "nl": "Je geverifieerde e-mailadres"
    }
  },
  "pbdf.pbdf.email.domain": {
    "id": "domain",
    "name": {
      "en": "Email domain name",
      "nl": "E-mail domeinnaam"
    },
    "description": {
      "en": "The domain name of your email address",
      "nl": "De domeinnaam van je e-mailadres"
    }
  },
  "pbdf.pbdf.facebook.fullname": {
    "id": "fullname",
    "name": {
      "en": "Full name",
      "nl": "Volledige naam"
    },
    "description": {
      "en": "Your full name, as registered by Facebook",
      "nl": "Je volledige naam, zoals geregistreerd bij Facebook"
    }
  },
  "pbdf.pbdf.facebook.firstname": {
    "id": "firstname",
    "name": {
      "en": "First name",
      "nl": "Voornaam"
    },
    "description": {
      "en": "Your first name, as registered by Facebook",
      "nl": "Je voornaam, zoals geregistreerd bij Facebook"
    }
  },
  "pbdf.pbdf.facebook.familyname": {
    "id": "familyname",
    "name": {
      "en": "Family name",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your family name, as registered by Facebook",
      "nl": "Je achternaam, zoals geregistreerd bij Facebook"
    }
  },
  "pbdf.pbdf.facebook.email": {
    "id": "email",
    "name": {
      "en": "Email address",
      "nl": "E-mailadres"
    },
    "description": {
      "en": "Your email address, as registered by Facebook",
      "nl": "Je e-mailadres, zoals geregistreerd bij Facebook"
    }
  },
  "pbdf.pbdf.facebook.dateofbirth": {
    "id": "dateofbirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Your date of birth, as registered in Facebook",
      "nl": "Je geboortedatum, zoals opgegeven bij Facebook"
    }
  },
  "pbdf.pbdf.ideal.fullname": {
    "id": "fullname",
    "name": {
      "en": "Account holder",
      "nl": "Rekeninghouder"
    },
    "description": {
      "en": "Your full name, as registered at your bank",
      "nl": "Je volledige naam, zoals geregistreerd bij je bank"
    }
  },
  "pbdf.pbdf.ideal.iban": {
    "id": "iban",
    "name": {
      "en": "IBAN",
      "nl": "IBAN"
    },
    "description": {
      "en": "The IBAN of your bank account",
      "nl": "De IBAN van je bankrekening"
    }
  },
  "pbdf.pbdf.ideal.bic": {
    "id": "bic",
    "name": {
      "en": "BIC",
      "nl": "BIC"
    },
    "description": {
      "en": "The Bank Identifier Code of your bank",
      "nl": "De Bank Identifier Code van je bank"
    }
  },
  "pbdf.pbdf.idin.initials": {
    "id": "initials",
    "name": {
      "en": "Initials",
      "nl": "Initialen"
    },
    "description": {
      "en": "First letters of your given name(s), as registered at your bank",
      "nl": "Je initialen, zoals geregistreerd bij je bank"
    }
  },
  "pbdf.pbdf.idin.familyname": {
    "id": "familyname",
    "name": {
      "en": "Family name",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your family name, as registered at your bank",
      "nl": "Je achternaam, zoals geregistreerd bij je bank"
    }
  },
  "pbdf.pbdf.idin.dateofbirth": {
    "id": "dateofbirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Your date of birth, as registered at your bank",
      "nl": "Je geboortedatum, zoals geregistreerd bij je bank"
    }
  },
  "pbdf.pbdf.idin.gender": {
    "id": "gender",
    "name": {
      "en": "Gender",
      "nl": "Geslacht"
    },
    "description": {
      "en": "Your gender, as registered at your bank",
      "nl": "Je geslacht, zoals geregistreerd bij je bank"
    }
  },
  "pbdf.pbdf.idin.address": {
    "id": "address",
    "name": {
      "en": "Address",
      "nl": "Adres"
    },
    "description": {
      "en": "Your address, as registered at your bank",
      "nl": "Je adres, zoals geregistreerd bij je bank"
    }
  },
  "pbdf.pbdf.idin.zipcode": {
    "id": "zipcode",
    "name": {
      "en": "Postal code",
      "nl": "Postcode"
    },
    "description": {
      "en": "Your postal code, as registered at your bank",
      "nl": "Je postcode, zoals geregistreerd bij je bank"
    }
  },
  "pbdf.pbdf.idin.city": {
    "id": "city",
    "name": {
      "en": "City",
      "nl": "Woonplaats"
    },
    "description": {
      "en": "Your city of residence, as registered at your bank",
      "nl": "Je woonplaats, zoals geregistreerd bij je bank"
    }
  },
  "pbdf.pbdf.idin.country": {
    "id": "country",
    "name": {
      "en": "Country",
      "nl": "Land"
    },
    "description": {
      "en": "Your country of residence, as registered at your bank",
      "nl": "Het land waar je woont, zoals geregistreerd bij je bank"
    }
  },
  "pbdf.pbdf.idin.over12": {
    "id": "over12",
    "name": {
      "en": "Over 12",
      "nl": "Ouder dan 12"
    },
    "description": {
      "en": "Whether you are over 12",
      "nl": "Of je ouder dan 12 bent"
    }
  },
  "pbdf.pbdf.idin.over16": {
    "id": "over16",
    "name": {
      "en": "Over 16",
      "nl": "Ouder dan 16"
    },
    "description": {
      "en": "Whether you are over 16",
      "nl": "Of je ouder dan 16 bent"
    }
  },
  "pbdf.pbdf.idin.over18": {
    "id": "over18",
    "name": {
      "en": "Over 18",
      "nl": "Ouder dan 18"
    },
    "description": {
      "en": "Whether you are over 18",
      "nl": "Of je ouder dan 18 bent"
    }
  },
  "pbdf.pbdf.idin.over21": {
    "id": "over21",
    "name": {
      "en": "Over 21",
      "nl": "Ouder dan 21"
    },
    "description": {
      "en": "Whether you are over 21",
      "nl": "Of je ouder dan 21 bent"
    }
  },
  "pbdf.pbdf.idin.over65": {
    "id": "over65",
    "name": {
      "en": "Over 65",
      "nl": "Ouder dan 65"
    },
    "description": {
      "en": "Whether you are over 65",
      "nl": "Of je ouder dan 65 bent"
    }
  },
  "pbdf.pbdf.irmatube.type": {
    "id": "type",
    "name": {
      "en": "Type",
      "nl": "Type"
    },
    "description": {
      "en": "Your membership type",
      "nl": "Je lidmaatschapstype"
    }
  },
  "pbdf.pbdf.irmatube.id": {
    "id": "id",
    "name": {
      "en": "ID",
      "nl": "ID"
    },
    "description": {
      "en": "Your membership ID",
      "nl": "Je lidmaatschapsnummer"
    }
  },
  "pbdf.pbdf.irmatube.fullname": {
    "id": "fullname",
    "name": {
      "en": "Full name",
      "nl": "Volledige naam"
    },
    "description": {
      "en": "Your full name",
      "nl": "Uw volledige naam"
    }
  },
  "pbdf.pbdf.linkedin.fullname": {
    "id": "fullname",
    "name": {
      "en": "Full name",
      "nl": "Volledige naam"
    },
    "description": {
      "en": "Your full name, as registered by LinkedIn",
      "nl": "Je volledige naam, zoals geregistreerd bij LinkedIn"
    }
  },
  "pbdf.pbdf.linkedin.firstname": {
    "id": "firstname",
    "name": {
      "en": "First name",
      "nl": "Voornaam"
    },
    "description": {
      "en": "Your first name, as registered by LinkedIn",
      "nl": "Je voornaam, zoals geregistreerd bij LinkedIn"
    }
  },
  "pbdf.pbdf.linkedin.familyname": {
    "id": "familyname",
    "name": {
      "en": "Family name",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your family name, as registered by LinkedIn",
      "nl": "Je achternaam, zoals geregistreerd bij LinkedIn"
    }
  },
  "pbdf.pbdf.linkedin.email": {
    "id": "email",
    "name": {
      "en": "Email address",
      "nl": "E-mailadres"
    },
    "description": {
      "en": "Your email address, as registered by LinkedIn",
      "nl": "Je e-mailadres, zoals geregistreerd bij LinkedIn"
    }
  },
  "pbdf.pbdf.linkedin.profileurl": {
    "id": "profileurl",
    "name": {
      "en": "Profile",
      "nl": "Profiel"
    },
    "description": {
      "en": "URL to your LinkedIn profile",
      "nl": "URL naar je LinkedIn-profiel"
    }
  },
  "pbdf.pbdf.mijnirma.email": {
    "id": "email",
    "name": {
      "en": "Username",
      "nl": "Gebruikersnaam"
    },
    "description": {
      "en": "Your MyYivi app ID",
      "nl": "Je MijnYivi app-ID"
    }
  },
  "pbdf.pbdf.mobilenumber.mobilenumber": {
    "id": "mobilenumber",
    "name": {
      "en": "Mobile phone number",
      "nl": "Mobiele telefoonnummer"
    },
    "description": {
      "en": "Your verified mobile phone number",
      "nl": "Je geverifieerde mobiel telefoonnummer"
    }
  },
  "pbdf.pbdf.surfnet.institute": {
    "id": "institute",
    "name": {
      "en": "Institute",
      "nl": "Instituut"
    },
    "description": {
      "en": "The institute that provided these attributes",
      "nl": "De instantie die deze attributen heeft aangeleverd"
    }
  },
  "pbdf.pbdf.surfnet.type": {
    "id": "type",
    "name": {
      "en": "Type",
      "nl": "Type"
    },
    "description": {
      "en": "Your position at your institute",
      "nl": "Je positie bij je instantie"
    }
  },
  "pbdf.pbdf.surfnet.id": {
    "id": "id",
    "name": {
      "en": "Institute ID",
      "nl": "Instituut ID"
    },
    "description": {
      "en": "Your ID number at your institute",
      "nl": "Je ID-nummer bij je instantie"
    }
  },
  "pbdf.pbdf.surfnet.fullname": {
    "id": "fullname",
    "name": {
      "en": "Full name",
      "nl": "Volledige naam"
    },
    "description": {
      "en": "Your full name, as registered by your institute",
      "nl": "Je volledige naam, zoals geregistreerd bij je instantie"
    }
  },
  "pbdf.pbdf.surfnet.firstname": {
    "id": "firstname",
    "name": {
      "en": "First name",
      "nl": "Voornaam"
    },
    "description": {
      "en": "Your first name, as registered by your institute",
      "nl": "Je voornaam, zoals geregistreerd bij je instantie"
    }
  },
  "pbdf.pbdf.surfnet.familyname": {
    "id": "familyname",
    "name": {
      "en": "Family name",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your family name, as registered by your institute",
      "nl": "Je achternaam, zoals geregistreerd bij je instantie"
    }
  },
  "pbdf.pbdf.surfnet.email": {
    "id": "email",
    "name": {
      "en": "Email address",
      "nl": "E-mailadres"
    },
    "description": {
      "en": "Your email address at your institute",
      "nl": "Je e-mailadres bij je instantie"
    }
  },
  "pbdf.pbdf.surfnet-2.institute": {
    "id": "institute",
    "name": {
      "en": "Institution",
      "nl": "Instituut"
    },
    "description": {
      "en": "The institution where you study or work",
      "nl": "De instelling waar je studeert of werkt"
    }
  },
  "pbdf.pbdf.surfnet-2.type": {
    "id": "type",
    "name": {
      "en": "Type",
      "nl": "Type"
    },
    "description": {
      "en": "Your role at your institution",
      "nl": "Je rol bij je instelling"
    }
  },
  "pbdf.pbdf.surfnet-2.id": {
    "id": "id",
    "name": {
      "en": "Registration number",
      "nl": "Registratienummer"
    },
    "description": {
      "en": "Your registration number at your institution",
      "nl": "Je registratienummer bij je instelling"
    }
  },
  "pbdf.pbdf.surfnet-2.fullid": {
    "id": "fullid",
    "name": {
      "en": "Extended registration",
      "nl": "Uitgebreide registratie"
    },
    "description": {
      "en": "Extended registration number at your institution",
      "nl": "Uitgebreide registratie bij je instantie"
    }
  },
  "pbdf.pbdf.surfnet-2.fullname": {
    "id": "fullname",
    "name": {
      "en": "Full name",
      "nl": "Volledige naam"
    },
    "description": {
      "en": "Your full name, as registered by your institution",
      "nl": "Je volledige naam, zoals geregistreerd bij je instantie"
    }
  },
  "pbdf.pbdf.surfnet-2.firstname": {
    "id": "firstname",
    "name": {
      "en": "First name",
      "nl": "Voornaam"
    },
    "description": {
      "en": "Your first name, as registered by your institution",
      "nl": "Je voornaam, zoals geregistreerd bij je instantie"
    }
  },
  "pbdf.pbdf.surfnet-2.familyname": {
    "id": "familyname",
    "name": {
      "en": "Family name",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your family name, as registered by your institution",
      "nl": "Je achternaam, zoals geregistreerd bij je instantie"
    }
  },
  "pbdf.pbdf.surfnet-2.email": {
    "id": "email",
    "name": {
      "en": "Email address",
      "nl": "E-mailadres"
    },
    "description": {
      "en": "Your email address at your institution",
      "nl": "Je e-mailadres bij je instelling"
    }
  },
  "pbdf.pbdf.twitter.username": {
    "id": "username",
    "name": {
      "en": "Username",
      "nl": "Gebruikersnaam"
    },
    "description": {
      "en": "Your username at Twitter, as registered by Twitter",
      "nl": "Je gebruikersnaam bij Twitter, zoals geregistreerd bij Twitter"
    }
  },
  "pbdf.pbdf.twitter.fullname": {
    "id": "fullname",
    "name": {
      "en": "Full name",
      "nl": "Volledige naam"
    },
    "description": {
      "en": "Your full name, as registered by Twitter",
      "nl": "Je volledige naam, zoals geregistreerd bij Twitter"
    }
  },
  "pbdf.pbdf.twitter.email": {
    "id": "email",
    "name": {
      "en": "Email address",
      "nl": "E-mailadres"
    },
    "description": {
      "en": "Your email address, as registered by Twitter",
      "nl": "Je e-mailadres, zoals geregistreerd bij Twitter"
    }
  },
  "pbdf.pbdf.twitter.profileurl": {
    "id": "profileurl",
    "name": {
      "en": "Profile",
      "nl": "Profiel"
    },
    "description": {
      "en": "URL to your Twitter profile",
      "nl": "URL naar je Twitter-profiel"
    }
  },
  "pbdf.pilot-amsterdam.idcard.surname": {
    "id": "surname",
    "name": {
      "en": "Surname",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your full family name: your family name or (a combination with) the name of your partner",
      "nl": "Je volledige achternaam: je geslachtsnaam of (een combinatie met) de naam van je partner"
    }
  },
  "pbdf.pilot-amsterdam.idcard.firstnames": {
    "id": "firstnames",
    "name": {
      "en": "First names",
      "nl": "Voornamen"
    },
    "description": {
      "en": "All your first names",
      "nl": "Al je voornamen"
    }
  },
  "pbdf.pilot-amsterdam.idcard.gender": {
    "id": "gender",
    "name": {
      "en": "Gender",
      "nl": "Geslacht"
    },
    "description": {
      "en": "Your gender",
      "nl": "Je geslacht"
    }
  },
  "pbdf.pilot-amsterdam.idcard.dateofbirth": {
    "id": "dateofbirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Your date of birth",
      "nl": "Je geboortedatum"
    }
  },
  "pbdf.pilot-amsterdam.idcard.over12": {
    "id": "over12",
    "name": {
      "en": "Over 12",
      "nl": "Ouder dan 12"
    },
    "description": {
      "en": "Whether you are over 12",
      "nl": "Of je ouder dan 12 bent"
    }
  },
  "pbdf.pilot-amsterdam.idcard.over16": {
    "id": "over16",
    "name": {
      "en": "Over 16",
      "nl": "Ouder dan 16"
    },
    "description": {
      "en": "Whether you are over 16",
      "nl": "Of je ouder dan 16 bent"
    }
  },
  "pbdf.pilot-amsterdam.idcard.over18": {
    "id": "over18",
    "name": {
      "en": "Over 18",
      "nl": "Ouder dan 18"
    },
    "description": {
      "en": "Whether you are over 18",
      "nl": "Of je ouder dan 18 bent"
    }
  },
  "pbdf.pilot-amsterdam.idcard.over21": {
    "id": "over21",
    "name": {
      "en": "Over 21",
      "nl": "Ouder dan 21"
    },
    "description": {
      "en": "Whether you are over 21",
      "nl": "Of je ouder dan 21 bent"
    }
  },
  "pbdf.pilot-amsterdam.idcard.over65": {
    "id": "over65",
    "name": {
      "en": "Over 65",
      "nl": "Ouder dan 65"
    },
    "description": {
      "en": "Whether you are over 65",
      "nl": "Of je ouder dan 65 bent"
    }
  },
  "pbdf.pilot-amsterdam.idcard.nationality": {
    "id": "nationality",
    "name": {
      "en": "Nationality",
      "nl": "Nationaliteit"
    },
    "description": {
      "en": "Your nationality",
      "nl": "Je nationaliteit"
    }
  },
  "pbdf.pilot-amsterdam.idcard.personalnumber": {
    "id": "personalnumber",
    "name": {
      "en": "Personal Identification Number",
      "nl": "Persoonlijk identificatienummer"
    },
    "description": {
      "en": "Your Personal Identification Number. For Dutch travel documents your Dutch Citizen service number (BSN)",
      "nl": "Je persoonlijk identificatienummber. Voor Nederlandse reisdocumenten je Burgerservicenummer (BSN)"
    }
  },
  "pbdf.pilot-amsterdam.idcard.assurancelevel": {
    "id": "assurancelevel",
    "name": {
      "en": "Assurance level",
      "nl": "Betrouwbaarheidsniveau"
    },
    "description": {
      "en": "The level of assurance according to eIDAS",
      "nl": "Het betrouwbaarheidsniveau volgens eIDAS"
    }
  },
  "pbdf.pilot-amsterdam.idcard.documentnumber": {
    "id": "documentnumber",
    "name": {
      "en": "Document number",
      "nl": "Documentnummer"
    },
    "description": {
      "en": "The document number of your ID card",
      "nl": "Het documentnummer van je ID-kaart"
    }
  },
  "pbdf.pilot-amsterdam.idcard.photo": {
    "id": "photo",
    "name": {
      "en": "Photo",
      "nl": "Foto"
    },
    "description": {
      "en": "The portrait photo as included in your ID card",
      "nl": "De portretfoto die in je ID-kaart is opgenomen"
    }
  },
  "pbdf.pilot-amsterdam.passport.surname": {
    "id": "surname",
    "name": {
      "en": "Surname",
      "nl": "Achternaam"
    },
    "description": {
      "en": "Your full family name: your family name or (a combination with) the name of your partner",
      "nl": "Je volledige achternaam: je geslachtsnaam of (een combinatie met) de naam van je partner"
    }
  },
  "pbdf.pilot-amsterdam.passport.firstnames": {
    "id": "firstnames",
    "name": {
      "en": "First names",
      "nl": "Voornamen"
    },
    "description": {
      "en": "All your first names",
      "nl": "Al je voornamen"
    }
  },
  "pbdf.pilot-amsterdam.passport.gender": {
    "id": "gender",
    "name": {
      "en": "Gender",
      "nl": "Geslacht"
    },
    "description": {
      "en": "Your gender",
      "nl": "Je geslacht"
    }
  },
  "pbdf.pilot-amsterdam.passport.dateofbirth": {
    "id": "dateofbirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Your date of birth",
      "nl": "Je geboortedatum"
    }
  },
  "pbdf.pilot-amsterdam.passport.over12": {
    "id": "over12",
    "name": {
      "en": "Over 12",
      "nl": "Ouder dan 12"
    },
    "description": {
      "en": "Whether you are over 12",
      "nl": "Of je ouder dan 12 bent"
    }
  },
  "pbdf.pilot-amsterdam.passport.over16": {
    "id": "over16",
    "name": {
      "en": "Over 16",
      "nl": "Ouder dan 16"
    },
    "description": {
      "en": "Whether you are over 16",
      "nl": "Of je ouder dan 16 bent"
    }
  },
  "pbdf.pilot-amsterdam.passport.over18": {
    "id": "over18",
    "name": {
      "en": "Over 18",
      "nl": "Ouder dan 18"
    },
    "description": {
      "en": "Whether you are over 18",
      "nl": "Of je ouder dan 18 bent"
    }
  },
  "pbdf.pilot-amsterdam.passport.over21": {
    "id": "over21",
    "name": {
      "en": "Over 21",
      "nl": "Ouder dan 21"
    },
    "description": {
      "en": "Whether you are over 21",
      "nl": "Of je ouder dan 21 bent"
    }
  },
  "pbdf.pilot-amsterdam.passport.over65": {
    "id": "over65",
    "name": {
      "en": "Over 65",
      "nl": "Ouder dan 65"
    },
    "description": {
      "en": "Whether you are over 65",
      "nl": "Of je ouder dan 65 bent"
    }
  },
  "pbdf.pilot-amsterdam.passport.nationality": {
    "id": "nationality",
    "name": {
      "en": "Nationality",
      "nl": "Nationaliteit"
    },
    "description": {
      "en": "Your nationality",
      "nl": "Je nationaliteit"
    }
  },
  "pbdf.pilot-amsterdam.passport.personalnumber": {
    "id": "personalnumber",
    "name": {
      "en": "Personal Identification Number",
      "nl": "Persoonlijk identificatienummer"
    },
    "description": {
      "en": "Your Personal Identification Number. For Dutch travel documents your Dutch Citizen service number (BSN)",
      "nl": "Je persoonlijk identificatienummber. Voor Nederlandse reisdocumenten je Burgerservicenummer (BSN)"
    }
  },
  "pbdf.pilot-amsterdam.passport.assurancelevel": {
    "id": "assurancelevel",
    "name": {
      "en": "Assurance level",
      "nl": "Betrouwbaarheidsniveau"
    },
    "description": {
      "en": "The level of assurance according to eIDAS",
      "nl": "Het betrouwbaarheidsniveau volgens eIDAS"
    }
  },
  "pbdf.pilot-amsterdam.passport.documentnumber": {
    "id": "documentnumber",
    "name": {
      "en": "Document number",
      "nl": "Documentnummer"
    },
    "description": {
      "en": "The document number of your passport",
      "nl": "Het documentnummer van je paspoort"
    }
  },
  "pbdf.pilot-amsterdam.passport.photo": {
    "id": "photo",
    "name": {
      "en": "Photo",
      "nl": "Foto"
    },
    "description": {
      "en": "The portrait photo as included in your passport",
      "nl": "De portretfoto die in je paspoort is opgenomen"
    }
  },
  "pbdf.sidn-pbdf.email.email": {
    "id": "email",
    "name": {
      "en": "Email address",
      "nl": "E-mailadres"
    },
    "description": {
      "en": "Your verified email address",
      "nl": "Je geverifieerde e-mailadres"
    }
  },
  "pbdf.sidn-pbdf.email.domain": {
    "id": "domain",
    "name": {
      "en": "Email domain name",
      "nl": "E-mail domeinnaam"
    },
    "description": {
      "en": "The domain name of your email address",
      "nl": "De domeinnaam van je e-mailadres"
    }
  },
  "pbdf.sidn-pbdf.irma.pseudonym": {
    "id": "pseudonym",
    "name": {
      "en": "App ID",
      "nl": "App-ID"
    },
    "description": {
      "en": "Your MyYivi app ID",
      "nl": "Je MijnYivi app-ID"
    }
  },
  "pbdf.sidn-pbdf.mobilenumber.mobilenumber": {
    "id": "mobilenumber",
    "name": {
      "en": "Mobile phone number",
      "nl": "Mobiele telefoonnummer"
    },
    "description": {
      "en": "Your verified mobile phone number",
      "nl": "Je geverifieerde mobiel telefoonnummer"
    }
  },
  "pbdf.sidn-pbdf.uniqueid.uniqueid": {
    "id": "uniqueid",
    "name": {
      "en": "Login code",
      "nl": "Inlogcode"
    },
    "description": {
      "en": "Your unique login code.",
      "nl": "Je unieke inlogcode."
    }
  },
  "pbdf.sidn-pbdf.uniqueid.organization": {
    "id": "organization",
    "name": {
      "en": "Organization",
      "nl": "Organisatie"
    },
    "description": {
      "en": "The organization that uses this login.",
      "nl": "De organisatie die gebruik maakt van deze login."
    }
  },
  "pbdf.signicat.authorization.kvkNumber": {
    "id": "kvkNumber",
    "name": {
      "en": "KVK number",
      "nl": "KVK nummer"
    },
    "description": {
      "en": "KVK number of the organisation",
      "nl": "KVK nummer van de organisatie"
    }
  },
  "pbdf.signicat.authorization.name": {
    "id": "name",
    "name": {
      "en": "Name of the organisation",
      "nl": "Naam van de organisatie"
    },
    "description": {
      "en": "Name of the organisation",
      "nl": "Naam van de organisatie"
    }
  },
  "pbdf.signicat.authorization.authorizationDescription": {
    "id": "authorizationDescription",
    "name": {
      "en": "Description of the authorization",
      "nl": "Omschrijving van de machtiging"
    },
    "description": {
      "en": "Description of the authorization",
      "nl": "Omschrijving van de machtiging"
    }
  },
  "pbdf.signicat.authorization.fullname": {
    "id": "fullname",
    "name": {
      "en": "Full name",
      "nl": "Volledige naam"
    },
    "description": {
      "en": "Full name of the authorized person",
      "nl": "Volledige naam van de gemachtigde"
    }
  },
  "pbdf.signicat.authorization.euid": {
    "id": "euid",
    "name": {
      "en": "EUID",
      "nl": "EUID"
    },
    "description": {
      "en": "European Unique Identifier",
      "nl": "Europees uniek identificatienummer"
    }
  },
  "pbdf.signicat.authorization.rsin": {
    "id": "rsin",
    "name": {
      "en": "RSIN number",
      "nl": "RSIN nummer"
    },
    "description": {
      "en": "Legal Entity or Partnership Identification Number",
      "nl": "Rechtspersoon of Samenwerkingsverband Identificatie Nummer"
    }
  },
  "pbdf.signicat.authorization.tradeNames": {
    "id": "tradeNames",
    "name": {
      "en": "Trade names",
      "nl": "Handelsnamen"
    },
    "description": {
      "en": "Trade names under which the company trades",
      "nl": "Handelsnamen waar de onderneming onder handelt"
    }
  },
  "pbdf.signicat.authorization.legalEntity": {
    "id": "legalEntity",
    "name": {
      "en": "Legal entity",
      "nl": "Rechtsvorm"
    },
    "description": {
      "en": "Legal entity of the owner of the organisation",
      "nl": "Rechtsvorm van de eigenaar van de maatschappelijke activiteit"
    }
  },
  "pbdf.signicat.authorization.address": {
    "id": "address",
    "name": {
      "en": "Address of the organisation",
      "nl": "Adres van de organisatie"
    },
    "description": {
      "en": "Address of the organisation",
      "nl": "Adres van de organisatie"
    }
  },
  "pbdf.signicat.authorization.sbiActivity": {
    "id": "sbiActivity",
    "name": {
      "en": "SBI activity",
      "nl": "SBI activiteit"
    },
    "description": {
      "en": "SBI code in accordance with the SBI 2008 structure with associated description of the activity",
      "nl": "SBI codering conform de SBI 2008 structuur met bijbehorende omschrijving van de activiteit"
    }
  },
  "pbdf.signicat.authorization.registrationStart": {
    "id": "registrationStart",
    "name": {
      "en": "Start date of registration",
      "nl": "Aanvangsdatum van de registratie"
    },
    "description": {
      "en": "Start date of the organization's registration",
      "nl": "Aanvangsdatum van de registratie van de maatschappelijke activiteit"
    }
  },
  "pbdf.signicat.authorization.referenceMoment": {
    "id": "referenceMoment",
    "name": {
      "en": "Reference moment of KVK registration of issuer",
      "nl": "Peilmoment van KVK inschrijving van uitgever van machtiging"
    },
    "description": {
      "en": "Reference moment of KVK registration of the person who issued the authorization",
      "nl": "Peilmoment van KVK inschrijving van de persoon die de machtiging heeft afgegeven"
    }
  },
  "pbdf.signicat.authorization.authorizationCode": {
    "id": "authorizationCode",
    "name": {
      "en": "Authorization code",
      "nl": "Machtigingscode"
    },
    "description": {
      "en": "The code of the authorization",
      "nl": "De code van de machtiging"
    }
  },
  "pbdf.signicat.authorization.authorizationDate": {
    "id": "authorizationDate",
    "name": {
      "en": "Authorization date",
      "nl": "Datum van machtigen"
    },
    "description": {
      "en": "Date on which the authorization was issued",
      "nl": "Datum waarop de machtiging is afgegeven"
    }
  },
  "pbdf.signicat.authorization.issuedBy": {
    "id": "issuedBy",
    "name": {
      "en": "Authorization issued by",
      "nl": "Machtiging afgegeven door"
    },
    "description": {
      "en": "The person who issued the authorization",
      "nl": "De persoon die de machtiging heeft afgegeven"
    }
  },
  "pbdf.signicat.authorization.lastName": {
    "id": "lastName",
    "name": {
      "en": "Last name",
      "nl": "Geslachtsnaam"
    },
    "description": {
      "en": "Last name of the authorized person",
      "nl": "Geslachtsnaam van de gemachtigde"
    }
  },
  "pbdf.signicat.authorization.prefix": {
    "id": "prefix",
    "name": {
      "en": "Prefix",
      "nl": "Voorvoegsel"
    },
    "description": {
      "en": "Prefix of the authorized person",
      "nl": "Voorvoegsel geslachtsnaam van de gemachtigde"
    }
  },
  "pbdf.signicat.authorization.firstNames": {
    "id": "firstNames",
    "name": {
      "en": "First names",
      "nl": "Voornamen"
    },
    "description": {
      "en": "First names of the authorized person",
      "nl": "Voornamen van de gemachtigde"
    }
  },
  "pbdf.signicat.authorization.dateOfBirth": {
    "id": "dateOfBirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Date of birth of the authorized person",
      "nl": "Geboortedatum van de gemachtigde"
    }
  },
  "pbdf.signicat.kvkTradeRegister.kvkNumber": {
    "id": "kvkNumber",
    "name": {
      "en": "KVK number",
      "nl": "KVK nummer"
    },
    "description": {
      "en": "KVK number of the organisation",
      "nl": "KVK nummer van de organisatie"
    }
  },
  "pbdf.signicat.kvkTradeRegister.rsin": {
    "id": "rsin",
    "name": {
      "en": "RSIN number",
      "nl": "RSIN nummer"
    },
    "description": {
      "en": "Legal Entity or Partnership Identification Number",
      "nl": "Rechtspersoon of Samenwerkingsverband Identificatie Nummer"
    }
  },
  "pbdf.signicat.kvkTradeRegister.name": {
    "id": "name",
    "name": {
      "en": "Name of the organisation",
      "nl": "Naam van de organisatie"
    },
    "description": {
      "en": "Name of the organisation",
      "nl": "Naam van de organisatie"
    }
  },
  "pbdf.signicat.kvkTradeRegister.tradeNames": {
    "id": "tradeNames",
    "name": {
      "en": "Trade names",
      "nl": "Handelsnamen"
    },
    "description": {
      "en": "Trade names under which the company trades",
      "nl": "Handelsnamen waar de onderneming onder handelt"
    }
  },
  "pbdf.signicat.kvkTradeRegister.typeOwner": {
    "id": "typeOwner",
    "name": {
      "en": "Type of owner",
      "nl": "Type eigenaar"
    },
    "description": {
      "en": "Type of owner of the organisation",
      "nl": "Type eigenaar van de maatschappelijke activiteit"
    }
  },
  "pbdf.signicat.kvkTradeRegister.legalEntity": {
    "id": "legalEntity",
    "name": {
      "en": "Legal entity",
      "nl": "Rechtsvorm"
    },
    "description": {
      "en": "Legal entity of the owner of the organisation",
      "nl": "Rechtsvorm van de eigenaar van de maatschappelijke activiteit"
    }
  },
  "pbdf.signicat.kvkTradeRegister.address": {
    "id": "address",
    "name": {
      "en": "Address of the organisation",
      "nl": "Adres van de organisatie"
    },
    "description": {
      "en": "Address of the organisation",
      "nl": "Adres van de organisatie"
    }
  },
  "pbdf.signicat.kvkTradeRegister.emailAddress": {
    "id": "emailAddress",
    "name": {
      "en": "Email address of the organisation",
      "nl": "Emailadres van de organisatie"
    },
    "description": {
      "en": "Email address of the organisation",
      "nl": "Emailadres van de organisatie"
    }
  },
  "pbdf.signicat.kvkTradeRegister.phone": {
    "id": "phone",
    "name": {
      "en": "Phone number of the organisation",
      "nl": "Telefoonnummer van de organisatie"
    },
    "description": {
      "en": "Phone number of the organisation",
      "nl": "Telefoonnummer van de organisatie"
    }
  },
  "pbdf.signicat.kvkTradeRegister.sbiActivity": {
    "id": "sbiActivity",
    "name": {
      "en": "SBI activity",
      "nl": "SBI activiteit"
    },
    "description": {
      "en": "SBI code in accordance with the SBI 2008 structure with associated description of the activity",
      "nl": "SBI codering conform de SBI 2008 structuur met bijbehorende omschrijving van de activiteit"
    }
  },
  "pbdf.signicat.kvkTradeRegister.registrationStart": {
    "id": "registrationStart",
    "name": {
      "en": "Start date of registration",
      "nl": "Aanvangsdatum van de registratie"
    },
    "description": {
      "en": "Start date of the organization's registration",
      "nl": "Aanvangsdatum van de registratie van de maatschappelijke activiteit"
    }
  },
  "pbdf.signicat.kvkTradeRegister.dateDeregistration": {
    "id": "dateDeregistration",
    "name": {
      "en": "Date of deregistration",
      "nl": "Datum van uitschrijving"
    },
    "description": {
      "en": "Date of deregistration of the owner of the organization",
      "nl": "Datum van uitschrijving van de eigenaar van de maatschappelijke activiteit"
    }
  },
  "pbdf.signicat.kvkTradeRegister.registrationEnd": {
    "id": "registrationEnd",
    "name": {
      "en": "End date of registration",
      "nl": "Einddatum van de registratie"
    },
    "description": {
      "en": "End date of the organization's registration",
      "nl": "Einddatum van de registratie van de eigenaar van de maatschappelijke activiteit"
    }
  },
  "pbdf.signicat.kvkTradeRegister.specialLegalSituation": {
    "id": "specialLegalSituation",
    "name": {
      "en": "Special legal situation",
      "nl": "Bijzondere rechtstoestand"
    },
    "description": {
      "en": "Special legal situation of the owner of the organisation, eg: bankruptcy, debt restructuring or suspension of payment",
      "nl": "Bijzondere rechtstoestand van de eigenaar van de maatschappelijke activiteit, zoals: faillissement, schuldsanering of surseance van betaling"
    }
  },
  "pbdf.signicat.kvkTradeRegister.restrictionInLegalAction": {
    "id": "restrictionInLegalAction",
    "name": {
      "en": "Restriction in legal action",
      "nl": "Beperking in rechtshandeling"
    },
    "description": {
      "en": "Restriction in legal action of the owner of the organisation, eg: provisional rule, placed under guardianship or placed under administration",
      "nl": "Beperking in rechtshandeling van de eigenaar van de maatschappelijke activiteit, zoals: provisioneel bewind, onder curatele gesteld of onder bewind gesteld"
    }
  },
  "pbdf.signicat.kvkTradeRegister.foreignLegalStatus": {
    "id": "foreignLegalStatus",
    "name": {
      "en": "Foreign legal status",
      "nl": "Buitenlandse rechtstoestand"
    },
    "description": {
      "en": "Court decision by a foreign court",
      "nl": "Gerechtelijke uitspraak door een buitenlands gerecht"
    }
  },
  "pbdf.signicat.kvkTradeRegister.lastName": {
    "id": "lastName",
    "name": {
      "en": "Last name",
      "nl": "Geslachtsnaam"
    },
    "description": {
      "en": "Last name of the official",
      "nl": "Geslachtsnaam van de functionaris"
    }
  },
  "pbdf.signicat.kvkTradeRegister.prefix": {
    "id": "prefix",
    "name": {
      "en": "Prefix",
      "nl": "Voorvoegsel"
    },
    "description": {
      "en": "Prefix of the official",
      "nl": "Voorvoegsel geslachtsnaam van de functionaris"
    }
  },
  "pbdf.signicat.kvkTradeRegister.firstNames": {
    "id": "firstNames",
    "name": {
      "en": "First names",
      "nl": "Voornamen"
    },
    "description": {
      "en": "First names of the official",
      "nl": "Voornamen van de functionaris"
    }
  },
  "pbdf.signicat.kvkTradeRegister.dateOfBirth": {
    "id": "dateOfBirth",
    "name": {
      "en": "Date of birth",
      "nl": "Geboortedatum"
    },
    "description": {
      "en": "Date of birth of the official",
      "nl": "Geboortedatum van de functionaris"
    }
  },
  "pbdf.signicat.kvkTradeRegister.dateOfDeath": {
    "id": "dateOfDeath",
    "name": {
      "en": "Date of death",
      "nl": "Overlijdensdatum"
    },
    "description": {
      "en": "Date of death of the official",
      "nl": "Overlijdensdatum van de functionaris"
    }
  },
  "pbdf.signicat.kvkTradeRegister.fullname": {
    "id": "fullname",
    "name": {
      "en": "Full name",
      "nl": "Volledige naam"
    },
    "description": {
      "en": "Full name of the official",
      "nl": "Volledige naam van de functionaris"
    }
  },
  "pbdf.signicat.kvkTradeRegister.typeOfficial": {
    "id": "typeOfficial",
    "name": {
      "en": "Type of official",
      "nl": "Type functionaris"
    },
    "description": {
      "en": "Type of official",
      "nl": "Type functionaris"
    }
  },
  "pbdf.signicat.kvkTradeRegister.position": {
    "id": "position",
    "name": {
      "en": "Position",
      "nl": "Functie"
    },
    "description": {
      "en": "Position of the official",
      "nl": "Functie van de functionaris"
    }
  },
  "pbdf.signicat.kvkTradeRegister.jobTitle": {
    "id": "jobTitle",
    "name": {
      "en": "Job title",
      "nl": "Functietitel"
    },
    "description": {
      "en": "Job title of the official",
      "nl": "Titel van de functionaris"
    }
  },
  "pbdf.signicat.kvkTradeRegister.kindOfAuthorization": {
    "id": "kindOfAuthorization",
    "name": {
      "en": "Kind of authorization",
      "nl": "Soort bevoegdheid"
    },
    "description": {
      "en": "Kind of authorization",
      "nl": "Soort bevoegdheid"
    }
  },
  "pbdf.signicat.kvkTradeRegister.restrictionInEurosAuthorization": {
    "id": "restrictionInEurosAuthorization",
    "name": {
      "en": "Restriction of the authorization in euros",
      "nl": "Beperking van de bevoegdheid in euro's"
    },
    "description": {
      "en": "Authorization of the liable party is limited to the stated amount",
      "nl": "Bevoegdheid van de aansprakelijke is beperkt tot het genoemde bedrag"
    }
  },
  "pbdf.signicat.kvkTradeRegister.otherRestrictionAuthorization": {
    "id": "otherRestrictionAuthorization",
    "name": {
      "en": "Other restrictions of the authorization",
      "nl": "Overige beperking van de bevoegdheid"
    },
    "description": {
      "en": "Indication of whether any other limitation applies to the person liable",
      "nl": "Indicatie of er een andere beperking voor de aansprakelijke geldt"
    }
  },
  "pbdf.signicat.kvkTradeRegister.isAuthorizedWithOtherPersons": {
    "id": "isAuthorizedWithOtherPersons",
    "name": {
      "en": "Is authorized with other persons",
      "nl": "Is bevoegd met andere personen"
    },
    "description": {
      "en": "Indication indicating that there is joint authority with other persons (Yes) or with the other directors (No)",
      "nl": "Indicatie die aangeeft dat er een gezamenlijke bevoegdheid is met andere personen (Ja) of met de andere bestuurders (Nee)"
    }
  },
  "pbdf.signicat.kvkTradeRegister.typePowerOfAttorney": {
    "id": "typePowerOfAttorney",
    "name": {
      "en": "Type of power of attorney",
      "nl": "Type volmacht"
    },
    "description": {
      "en": "Type of power of attorney",
      "nl": "Type volmacht, zoals: Volledige volmacht of beperkte volmacht"
    }
  },
  "pbdf.signicat.kvkTradeRegister.restrictioninMoneyPowerOfAttorney": {
    "id": "restrictioninMoneyPowerOfAttorney",
    "name": {
      "en": "Restriction in money of the power of attorney",
      "nl": "Beperking in geld van de volmacht"
    },
    "description": {
      "en": "If the authorized representative is authorized up to a certain amount",
      "nl": "Indien de gemachtigde tot een bepaald bedrag is gemachtigd"
    }
  },
  "pbdf.signicat.kvkTradeRegister.restrictionOnActPowerOfAttorney": {
    "id": "restrictionOnActPowerOfAttorney",
    "name": {
      "en": "Restriction on act of the power of attorney",
      "nl": "Beperking in handeling van de volmacht"
    },
    "description": {
      "en": "If the authorized person has a structured restriction of type of act",
      "nl": "Indien de gemachtigde een gestructureerde beperking in handelen heeft"
    }
  },
  "pbdf.signicat.kvkTradeRegister.hasOtherPowerOfAttorney": {
    "id": "hasOtherPowerOfAttorney",
    "name": {
      "en": "Has other power of attorney",
      "nl": "Heeft overige volmacht"
    },
    "description": {
      "en": "Indication indicating that the authorized person has a power of attorney that cannot be included in a structured way as a type of act",
      "nl": "Indicatie die aangeeft dat de gemachtigde een volmacht heeft die niet gestructureerd als soort handeling opgenomen kan worden"
    }
  },
  "pbdf.signicat.kvkTradeRegister.descriptionOtherPowerOfAttorney": {
    "id": "descriptionOtherPowerOfAttorney",
    "name": {
      "en": "Description other power of attorney",
      "nl": "Omschrijving overige volmacht"
    },
    "description": {
      "en": "Content of the restriction not to be included in a structured way in the power of attorney",
      "nl": "Inhoud van de niet gestructureerd op te nemen beperking in de volmacht"
    }
  },
  "pbdf.signicat.kvkTradeRegister.permissionToChangeTradeRegister": {
    "id": "permissionToChangeTradeRegister",
    "name": {
      "en": "Permission to file changes to the trade register",
      "nl": "Mag opgave handelsregister doen"
    },
    "description": {
      "en": "If the authorized representative has the permission to file changes to the trade register",
      "nl": "Indien de gemachtigde opgave mag doen aan het handelsregister"
    }
  },
  "pbdf.signicat.kvkTradeRegister.specialLegalSituationOfficial": {
    "id": "specialLegalSituationOfficial",
    "name": {
      "en": "Special legal situation of the official",
      "nl": "Bijzondere rechtstoestand functionaris"
    },
    "description": {
      "en": "Special legal situation of the official, eg: bankruptcy, debt restructuring or suspension of payment",
      "nl": "Bijzondere rechtstoestand van de functionaris, zoals: faillissement, schuldsanering of surseance van betaling"
    }
  },
  "pbdf.signicat.kvkTradeRegister.restrictionInLegalActionOfficial": {
    "id": "restrictionInLegalActionOfficial",
    "name": {
      "en": "Restriction in legal action of the official",
      "nl": "Beperking in rechtshandeling functionaris"
    },
    "description": {
      "en": "Restriction in legal action of the official, eg: provisional rule, placed under guardianship or placed under administration",
      "nl": "Beperking in rechtshandeling van de functionaris, zoals: provisioneel bewind, onder curatele gesteld of onder bewind gesteld"
    }
  },
  "pbdf.signicat.kvkTradeRegister.suspensionStart": {
    "id": "suspensionStart",
    "name": {
      "en": "Start date of suspension",
      "nl": "Aanvangsdatum van de schorsing"
    },
    "description": {
      "en": "Indicates when the official's suspension started",
      "nl": "Geeft aan wanneer de schorsing van de functionaris is gestart"
    }
  },
  "pbdf.signicat.kvkTradeRegister.suspensionEnd": {
    "id": "suspensionEnd",
    "name": {
      "en": "End date of suspension",
      "nl": "Einddatum van de schorsing"
    },
    "description": {
      "en": "Indicates when the official's suspension has ended",
      "nl": "Geeft aan wanneer de schorsing van de functionaris beeindigd is"
    }
  },
  "pbdf.signicat.kvkTradeRegister.emancipationOfMinor": {
    "id": "emancipationOfMinor",
    "name": {
      "en": "Emancipation of a minor",
      "nl": "Handlichting"
    },
    "description": {
      "en": "Emancipation of a minor",
      "nl": "Handlichting houdt in dat een minderjarige door toewijzing van een rechter dezelfde bevoegdheden toegekend krijgt als een meerderjarige"
    }
  },
  "pbdf.signicat.kvkTradeRegister.hasRestriction": {
    "id": "hasRestriction",
    "name": {
      "en": "Has restriction",
      "nl": "Heeft beperking"
    },
    "description": {
      "en": "Indication of whether there is some kind of restriction that affects the determination of an authorization (Yes, No)",
      "nl": "Indicatie of er sprake is van enige vorm van beperking, die van invloed is op het bepalen van een bevoegdheid (Ja, Nee)"
    }
  },
  "pbdf.signicat.kvkTradeRegister.isAuthorized": {
    "id": "isAuthorized",
    "name": {
      "en": "Is authorized",
      "nl": "Is bevoegd"
    },
    "description": {
      "en": "Indication of whether someone is authorized (Yes, No or Not established)",
      "nl": "Indicatie of iemand bevoegd is (Ja, Nee of Niet vastgesteld)"
    }
  },
  "pbdf.signicat.kvkTradeRegister.reason": {
    "id": "reason",
    "name": {
      "en": "Reason for established authorization",
      "nl": "Reden van vastgestelde bevoegdheid"
    },
    "description": {
      "en": "Reason for (not) being authorized or not being able to determine someone's authorization",
      "nl": "Reden voor het niet/wel bevoegd zijn of niet kunnen vastellen van iemands bevoegdheid"
    }
  },
  "pbdf.signicat.kvkTradeRegister.referenceMoment": {
    "id": "referenceMoment",
    "name": {
      "en": "Reference moment",
      "nl": "Peilmoment (opvraagmoment uit handelsregister)"
    },
    "description": {
      "en": "Reference moment is the moment the data is extracted from the trade register (format yyyymmddhhmmssmmm)",
      "nl": "Peilmoment is het moment dat de gegevens uit het handelsregister zijn onttrokken (formaat jjjjmmddhhmmssmmm)"
    }
  },
  "pbdf.surf.secureid.secureid": {
    "id": "secureid",
    "name": {
      "en": "Identifier",
      "nl": "Identifier"
    },
    "description": {
      "en": "Your SURFsecureID identifier",
      "nl": "Je SURFsecureID identifier"
    }
  },
  "pbdf.surf.secureid.environment": {
    "id": "environment",
    "name": {
      "en": "Environment",
      "nl": "Omgeving"
    },
    "description": {
      "en": "The SURFsecureID environment",
      "nl": "De SURFsecureID-omgeving"
    }
  },
  "pbdf.surf.surfdrive.eppn": {
    "id": "eppn",
    "name": {
      "en": "Institution user ID",
      "nl": "Instelling gebruikers-ID"
    },
    "description": {
      "en": "Your ID at your institute",
      "nl": "Je ID bij je instelling"
    }
  },
  "pbdf.surf.surfdrive.emailadres": {
    "id": "emailadres",
    "name": {
      "en": "Email address",
      "nl": "E-mailadres"
    },
    "description": {
      "en": "Your email address",
      "nl": "Je e-mailadres"
    }
  },
  "pbdf.surf.surfdrive.displayname": {
    "id": "displayname",
    "name": {
      "en": "Name",
      "nl": "Naam"
    },
    "description": {
      "en": "Your name",
      "nl": "Je naam"
    }
  },
  "pbdf.vgz.machtiging.clientnumber": {
    "id": "clientnumber",
    "name": {
      "en": "VGZ Customer number",
      "nl": "VGZ Klantnummer"
    },
    "description": {
      "en": "The VGZ customer number of the VGZ client who mandated you",
      "nl": "Het VGZ klantnummer van de VGZ verzekerde die deze machtiging aan je gegeven heeft"
    }
  },
  "pbdf.vgz.machtiging.clientfullname": {
    "id": "clientfullname",
    "name": {
      "en": "Insured person",
      "nl": "Verzekerde"
    },
    "description": {
      "en": "The name of the VGZ customer who mandated you",
      "nl": "De naam van de VGZ verzekerde die deze machtiging aan je gegevens heeft"
    }
  },
  "pbdf.vgz.machtiging.mandateid": {
    "id": "mandateid",
    "name": {
      "en": "MandateID",
      "nl": "Machtiging ID"
    },
    "description": {
      "en": "A unique ID for this mandate",
      "nl": "Een uniek ID voor deze machtiging"
    }
  }
}