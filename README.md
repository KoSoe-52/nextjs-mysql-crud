
npm run dev
## INSTALL A PROJECT NEXTJS
    - npx create-next-app@latest
## INSTALL PRISMA IN PROJECT NEXTJS
- cd my-app
- npm install prisma --save-dev
- npx prisma init --datasource-provider postgres
- npx prisma migrate dev --name init (migrations folder ပေါ်လာပါပီ)
- npm install @prisma/client (db connection prismaClient ကို install)
- npx prisma generate

## Install SWR
- npm i swr (api fetch လုပ်ဖို့အတွက်/ cache စနစ်ပါ)

## Routes
- _lib/prisma.ts : Configure PrismaClient , to connect Prisma to NextJS, we use this file to use operations such as ( create , read , edit , delete ) in general, query statements to Postgresql

- (route)/api/post/route.ts : build Methods, to request api, in this file we install 2 methods ( GET , POST ), used to get all data using GET method, also POST method we use to add a post

- (route)/api/post/[id]/route.ts : As for this file, configure the methods ( GET , PUT , DELETE ) used to request API for functions (Read, Update, Delete)

- (route)/post/page.tsx : build an interface to display all posts, now we need to request " api/post " (using " GET " method) to get all products

- (route)/post/create/page.tsx : Used to add a new post, request " api/post " (use method " POST ")

- (route)/post/edit/[id]/page.tsx : Displays post information according to the ID to be edited. We need to request " api/route/[id] " , for example: https://localhost:3000/api/post/123 , then continue to request " api/post/123 " (using the " PUT " method) to update the article

- (route)/post/read/[id]/page.tsx : Read posts by ID, we need to request " api/post/[id] " using method " GET "

- (route)/post/delete/[id]/page.tsx : Delete posts by ID, we need to request " api/post/[id] " using method "  DELETE "




