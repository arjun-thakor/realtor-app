export interface IHitResponse {
    hits: [IHit]
}

export interface IHit {
    id:                    number;
    ownerID:               number;
    userExternalID:        string;
    sourceID:              number;
    state:                 string;
    _geoloc:               Geo;
    geography:             Geo;
    purpose:               string;
    price:                 number;
    product:               string;
    productLabel:          string;
    productScore:          number;
    rentFrequency:         string;
    referenceNumber:       string;
    permitNumber:          string;
    title:                 string;
    title_l1:              string;
    externalID:            string;
    slug:                  string;
    slug_l1:               string;
    location:              Category[];
    category:              Category[];
    createdAt:             number;
    updatedAt:             number;
    reactivatedAt:         number;
    rooms:                 number;
    baths:                 number;
    area:                  number;
    score:                 number;
    score_l1:              number;
    coverPhoto:            CoverPhoto;
    photoCount:            number;
    videoCount:            number;
    panoramaCount:         number;
    phoneNumber:           PhoneNumber;
    contactName:           string;
    agency:                IHitAgency;
    hash:                  string;
    keywords:              string[];
    isVerified:            boolean;
    verification:          Verification;
    verifiedScore:         number;
    completionStatus:      string;
    randBoostScore:        number;
    randBoostScore_l1:     number;
    floorPlanID:           number;
    furnishingStatus:      string;
    extraFields:           ExtraFields;
    type:                  string;
    cityLevelScore:        number;
    indyScore:             number;
    indyScore_l1:          number;
    hasMatchingFloorPlans: boolean;
    photoIDs:              number[];
    hidePrice:             boolean;
    objectID:              string;
    _highlightResult:      HighlightResult;
}

export interface Geo {
    lat: number;
    lng: number;
}

export interface HighlightResult {
    referenceNumber: ExternalID;
    title:           ExternalID;
    externalID:      ExternalID;
    agency:          HighlightResultAgency;
    keywords:        ExternalID[];
}

export interface HighlightResultAgency {
    name: ExternalID;
}

export interface ExternalID {
    value:        string;
    matchLevel:   MatchLevel;
    matchedWords: any[];
}

export enum MatchLevel {
    None = "none",
}

export interface IHitAgency {
    id:           number;
    objectID:     number;
    name:         string;
    name_l1:      string;
    externalID:   string;
    product:      string;
    productScore: number;
    licenses:     License[];
    logo:         Logo;
    slug:         string;
    slug_l1:      string;
    tier:         number;
    roles:        any[];
    createdAt:    Date;
}

export interface License {
    number:    string;
    authority: string;
}

export interface Logo {
    id:  number;
    url: string;
}

export interface Category {
    id:               number;
    level:            number;
    externalID:       string;
    name:             string;
    name_l1:          string;
    slug:             string;
    slug_l1:          string;
    nameSingular?:    string;
    nameSingular_l1?: string;
}

export interface CoverPhoto {
    id:         number;
    externalID: string;
    title:      null;
    url:        string;
    orderIndex: number;
    nimaScore:  number;
    main:       boolean;
}

export interface ExtraFields {
    dldBuildingNK: string;
    dldPropertySK: string;
}

export interface PhoneNumber {
    mobile:        string;
    phone:         string;
    whatsapp:      string;
    proxyMobile:   string;
    phoneNumbers:  string[];
    mobileNumbers: string[];
}

export interface Verification {
    updatedAt:  number;
    eligible:   boolean;
    status:     string;
    verifiedAt: number;
}
