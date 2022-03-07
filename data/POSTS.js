import { USERS } from "../data/USERS"

export const POSTS = [
    {
        imageUrl:'https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/275291268_435733228354174_3684161202101880934_n.jpg?stp=dst-jpg_p180x540&_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeG3LCko2uTT7dX5pm7Hrob972e3ZmrJ30HvZ7dmasnfQY1-sqWA2oOSsj_m4J96JhLLz88mMOgAQmRov5bZP2se&_nc_ohc=PYJD9P96HN8AX9qEjGN&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&oh=00_AT_SXTbnM42ovOXg0wFynhw2YYadHU3-IyCRDGJwOjJIzA&oe=6227E14C',
        user: USERS[0].user,
        likes: 7879,
        caption: 'hey whatsup',
        profilePic : USERS[0].image,
        comments: [
            {
                user: 'tim',
                comment: 'wow this is awesome'
            },
            {
                user: 'john',
                comment: 'lovely'
            }
        ],
    },

    {
        imageUrl: 'https://scontent.flos1-1.fna.fbcdn.net/v/t45.1600-4/123642497_6230212780601_5277855043460667764_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=102&ccb=1-5&_nc_sid=68ce8d&_nc_eui2=AeEO3oD5zEd3yj90IKP9rlFOods2Ho-nM6Kh2zYej6czopWtLqovsAp2bVrHGgq40ZWdt4lAKzDb60ypZeOpzC0W&_nc_ohc=5IoWcEHkDbcAX_uSv3H&tn=p2VjGAJTb67qoxaD&_nc_ht=scontent.flos1-1.fna&oh=00_AT8iDEUR9H2A5-szUPpiKtcljZMRIii8-oFNVqwawh60sw&oe=6229A71E',
        user: USERS[1].user,
        likes: 7000,
        caption: 'Awesome stuff bro keep it up',
        profilePic : USERS[1].image,
        comments: [
            {
                user: 'cus',
                comment: 'nice'
            },
            {
                user: 'lois',
                comment: 'cool'
            }
        ],
    },
    {
        imageUrl: 'https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/275020943_1317171535417135_6030225352148240050_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGTGlbBDye8enz3X2ie0_Lv9VWZTruXT3b1VZlOu5dPdj94cbNp3CDTgS6UOtiJ_nBn2SrsqXEQrRM6kfJ0ErXe&_nc_ohc=KIC3gY7RsrYAX-SMPjd&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&oh=00_AT-hXkfoOCHscxUv12n52g7u-elNDYiFG0dX-QTFZjVvXQ&oe=6229315D',
        user: USERS[2].user,
        likes: 50,
        caption: 'had an amazing time with them yesterday',
        profilePic : USERS[2].image,
        comments: [
            {
                user: 'emmanuel',
                comment: 'nice'
            },
            {
                user: 'joe',
                comment: 'cool'
            }
        ],
    }
]