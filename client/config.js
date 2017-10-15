export default {
  bucket: {
    slug: process.env.BUCKET || 'todo-app',
    type_slug: 'tasks',
    read_key: process.env.READ,
    write_key: process.env.WRITE
  }
}