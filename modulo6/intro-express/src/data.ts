export type usersType = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
};

export type postsType = {
    id: number,
    title: string,
    body: string,
    userId: number
};

export const users: usersType[] = [
    {
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031",
        website: "hildegard.org"
    },
    {
        id: 2,
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        phone: "1-770-736-8031",
        website: "anastasia.net"
    },
    {
        id: 3,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        phone: "1-780-736-8596",
        website: "ramiro.info"
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        phone: "1-770-736-8031",
        website: "ramiro.info"
    },
    {
        id: 5,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        phone: "1-770-736-8031",
        website: "ramiro.info"
    }
]

// Mais viável criar o arrays de posts fora do array de usuários, pois 
// os posts se conectam aos usuários através da propriedade userId.
export const posts: postsType[] = [
    {
        userId: 2,
        id: 1,
        title: "único",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 2,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        userId: 3,
        id: 2,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        userId: 4,
        id: 2,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        userId: 1,
        id: 2,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
]