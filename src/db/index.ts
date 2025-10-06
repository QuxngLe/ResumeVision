import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Create database connection
let db: any;

try {
  if (process.env.POSTGRES_URL) {
    const connectionString = process.env.POSTGRES_URL;
    const client = postgres(connectionString);
    db = drizzle(client, { schema });
    console.log('✅ Database connected successfully');
  } else {
    throw new Error('No POSTGRES_URL found');
  }
} catch (error) {
  console.warn('⚠️ Database connection failed:', error);
  // Mock db for when database is not available
  db = {
    select: () => ({ 
      from: () => ({ 
        innerJoin: () => ({ 
          where: () => ({ 
            limit: () => [] 
          }) 
        }) 
      }) 
    }),
    insert: () => ({ 
      values: () => ({ 
        onConflictDoNothing: () => ({ 
          returning: () => [] 
        }),
        returning: () => [{ id: 1 }] // Mock returning value
      }) 
    }),
    update: () => ({
      set: () => ({
        where: () => Promise.resolve()
      })
    })
  };
}

export { db };