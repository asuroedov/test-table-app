export const initializingQueries = [
  `
    CREATE TABLE IF NOT EXISTS "transportation" (
	    "id" SERIAL PRIMARY KEY,
	    "date" TIMESTAMP,
	    "title" VARCHAR(100) NOT NULL,
	    "count" INTEGER,
	    "distance" INTEGER
    );`,
];
