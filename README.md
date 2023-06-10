
# Next.js Crud Api

Crud Api Using prisma and mongodb



## API Reference

#### Get all users

```https
  GET /api/user
```

#### Get a user

```https
  GET /api/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |


#### Create New User

```https
  POST /api/user
```

#### Update New User

```https
  PUT /api/user/id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to Update|

#### Delete New User

```https
  Delete /api/user/id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to Delete |


## Usage/Examples

```javascript
export async function PUT(req:Request,context:Context){
    const id:string=context.params.id
    const body=await req.json()
   const res:Todos= await prisma.todos.update({
        where:{
            id
        },
        data:body
    })
return NextResponse.json(res)
}
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/imarjunshrma/next.js_crud_api.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## 🛠 Skills
React,Node,Angular,React Native,Prisma,db,C,C++...


## 🚀 About Me
I'm a full stack developer...

