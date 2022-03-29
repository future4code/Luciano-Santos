type users = {
    name: string,
    email: string,
    role: string
};

const infoUsers: users[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
];

const returnAdminEmailList = (users: users[]): string[] =>{
    const adminEmailList: string[] = users
    .filter(user => user.role === "admin")
    .map(user => user.email);
    return adminEmailList;
};

console.log(returnAdminEmailList(infoUsers));