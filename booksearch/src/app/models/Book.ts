interface BookInfo {
    allowAnonLogging: boolean;
    authors: string[];
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks: object;
    industryIdentifiers: object[];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: object;
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    readingModes: object;
    subtitle: string;
    title: string;
}

export interface Book {
    accessInfo: any;
    etag: string;
    id: string;
    kind: string;
    saleInfo: any;
    searchInfo: any;
    selfLink: any;
    volumeInfo: BookInfo;
}