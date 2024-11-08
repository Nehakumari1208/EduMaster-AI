
/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://AI-Course-Generator_owner:sV2znJarLf1N@ep-holy-butterfly-a5udlnmk.us-east-2.aws.neon.tech/AI-Course-Generator?sslmode=require'
    },
  };