
# Crud API

Todos Crud API in next.js using prisma and mongodb



## API Reference

#### Get all users

```https
  GET /api/todos
```

#### Get a user

```https
  GET /api/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |


#### Create New User

```https
  POST /api/todos
```

#### Update New User

```https
  PUT /api/todos/id
```


#### Delete New User

```https
  Delete /api/todos/id
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/imarjunshrma/CrudAPI_Next.js.git
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


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`




## Usage/Examples

```javascript
export async function PUT(req:Request,context:any){
    const id=context.params.id
    const body=await req.json()
    console.log(id,body)
   const res= await prisma.todos.update({
        where:{
            id
        },
        data:body
    })
return NextResponse.json(res)
}
```


## 🛠 Skills
React,Node,Angular,React Native,Prisma,db,C,C++...


## 🚀 About Me
I'm a full stack developer...

