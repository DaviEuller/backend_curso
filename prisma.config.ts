import { defineConfig } from 'prisma/config'
import { PrismaMySQL } from '@prisma/adapter-mariadb'

export default defineConfig({
  earlyAccess: true,
  schema: './prisma/schema.prisma',
  migrate: {
    async adapter(env) {
      const { createPool } = await import('mariadb')
      const pool = createPool(env.DATABASE_URL)
      return new PrismaMySQL(pool)
    }
  }
})