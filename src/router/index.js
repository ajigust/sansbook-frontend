import { createRouter, createWebHistory } from 'vue-router'
import Content from "../views/Content.vue"
import Book from "../views/Book.vue"
import User from "../views/User.vue"
import AddBook from "../views/AddBook.vue"
import EditBook from "../views/EditBook.vue"
import IndexFront from "../views/IndexFront"
import Show from "../views/Single.vue"



const routes = [ 
  {
    path: '/',
    name: 'IndexFront',
    component: IndexFront
  },
  {
    path: '/show/:id',
    name: 'Show',
    component: Show
  },
  {
    path: '/admin',
    name: 'Content',
    component: Content
  },
  {
    path: '/admin-book',
    name: 'Book',
    component: Book
  },
  {
    path: '/admin-user',
    name: 'User',
    component: User
  },
  {
    path: '/admin-addBook',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/admin-editbook/:id',
    name: 'EditBook',
    component: EditBook
  },
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
