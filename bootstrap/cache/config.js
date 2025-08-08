const app = (await import('file:///home/shamim-haque/Desktop/tech_sync/config/app.js')).default;
const database = (await import('file:///home/shamim-haque/Desktop/tech_sync/config/database.js')).default;


export const configs = {
  app : app,
  database : database,
}