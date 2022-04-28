# optimize-diet
Optimize my diet


## Framworks used
- express.js: Used to create the server and routes.
- mongoose.js: Used to connect to a Mongodb Database and query it.
- lodash: Used to perform operations on arrays in the Perfect Sum Problem utility.
- nodemon: Used to keep server running while making edits.
- Vite: Used to setup React.js and run a fast webpack server.
- React.js: Frontend framework.
- React-router-dom: Used to create routes in a react web app.
- Mobx: Used to store data on the frontend.

## Backend

### Endpoints

***get restaurant Name:*** Gets restarant object by name.
> Parameters include: restaurantName(String)

***get combo:*** Get menu items that form combos of size comboSize, in a specified restaurant. 
> Parameters include: restaurantName(String), calories(Number), comboSize(Number).
