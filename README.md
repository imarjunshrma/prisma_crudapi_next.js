
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
  POST /api/todos/id
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
export async function DELETE(req:Request,context:any){
    const id=context.params.id
  await fetch(`${url}/${id}`,{
      method:'DELETE',
      headers:{
          'Content-Type':"application/json"
      }
    })
  
      return NextResponse.json({message:'user has been deleted'})
  }
```


## 🛠 Skills
React,Node,Angular,React Native,Prisma,db,C,C++...


## 🚀 About Me
I'm a full stack developer...

