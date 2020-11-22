/**
 * Interface responsável por conter os detalhes de cada quadrinho.
 */
export interface Comic {
    id: number;
    raro: boolean;
    title: string;
    issueNumber: number;
    variantDescription : string;
    description : string;
    resourceURI: string;
    format: string;
    pageCount: number;
    textObjects: [
        {
            type: string;
            language: string;
            text: string;
        }
    ],
    dates: [
        {
            type: string;
            url: string; 
        }
    ],
    prices: [
        {
            type: string;
            price: number; 
        }
    ],
    urls: [
        {
            type: string;
            url: string;
        }
    ],
    thumbnail: [
        {
            path: string;
            extension: string;
        }
    ],
    series: [
        {
            resourceURI: string;
            name: string;
        }
    ],
    creators: [
        {
            available: number;
            returned: number;
            collectionURI: string;
            items: [
                {
                    resourceURI: string;
                    name: string;
                    role: string;
                }
            ];
        }
    ],
    characters: [
        {
            available: number;
            returned: number;
            collectionURI: string;
            items: [
                {
                    resourceURI: string;
                    name: string;
                    role: string;
                }
            ];
        }
    ],
    stories: [
        {
            available: number;
            returned: number;
            collectionURI: string;
            items: [
                {
                    resourceURI: string;
                    name: string;
                    type: string;
                }
            ];
        }
    ],
    events: [
        {
            available: number;
            returned: number;
            collectionURI: string;
            items: [
                {
                    resourceURI: string;
                    name: string;
                }
            ]
        }
    ]
}
